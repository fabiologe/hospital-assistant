import { translate } from "./translate.js";
import { Template } from "../models/index.js";

const makeKey = (name) => {
  console.log("Make key", name);
  return name.toLowerCase().replace(/[\W]+/g, "_");
};

const createDefaultTemplate = async (template) => {
  const name = await translate(
    [template.name],
    "en",
    template.language,
    template.description
  );
  const description = await translate(
    [template.description],
    "en",
    template.language,
    template.name
  );

  const context = `${template.name} - ${template.description}`;
  let infoPointNames = template.infoPoints.map((obj) => obj.name);
  infoPointNames = await translate(
    infoPointNames,
    "en",
    template.language,
    context
  );
  let infoPointDescriptions = template.infoPoints.map((obj) => obj.description);
  infoPointDescriptions = await translate(
    infoPointDescriptions,
    "en",
    template.language,
    context
  );

  console.log("Translations done");

  let infoPoints = [];
  for (let i = 0; i < infoPointNames.length; i++) {
    infoPoints.push({
      key: makeKey(infoPointNames[i]),
      name: infoPointNames[i],
      description: infoPointDescriptions[i],
    });
  }

  const newTemplate = new Template({
    name,
    description,
    infoPoints,
    type: template.type,
    category: template.category,
    language: "en",
  });

  console.log("Create default template");
  console.log({
    name,
    description,
    infoPoints,
    type: template.type,
    category: template.category,
    language: "en",
  });

  await newTemplate.save();

  return newTemplate._id;
};

const addAlternativeToMainDoc = async (mainId, locale, alternativeId) => {
  const mainDoc = await Template.findById(mainId).exec();
  mainDoc.alternatives[locale] = alternativeId;
  await mainDoc.save();
};

const createAlternative = async (mainId, locale) => {
  const template = await Template.findById(mainId).exec();

  const name = await translate(
    [template.name],
    locale,
    template.language,
    template.description
  );
  const description = await translate(
    [template.description],
    locale,
    template.language,
    template.name
  );

  const context = `${template.name} - ${template.description}`;
  let infoPointNames = template.infoPoints.map((obj) => obj.name);
  infoPointNames = await translate(
    infoPointNames,
    locale,
    template.language,
    context
  );
  let infoPointDescriptions = template.infoPoints.map((obj) => obj.description);
  infoPointDescriptions = await translate(
    infoPointDescriptions,
    locale,
    template.language,
    context
  );

  let infoPoints = [];
  for (let i = 0; i < infoPointNames.length; i++) {
    infoPoints.push({
      name: infoPointNames[i],
      description: infoPointDescriptions[i],
    });
  }

  const newTemplate = new Template({
    name,
    description,
    infoPoints,
    type: template.type,
    category: template.category,
    language: locale,
    mainTemplate: template._id,
  });

  console.log("Create alternative template", locale);
  console.log({
    name,
    description,
    infoPoints,
    type: template.type,
    category: template.category,
    language: locale,
    mainTemplate: template._id,
  });

  await newTemplate.save();

  await addAlternativeToMainDoc(mainId, locale, newTemplate._id);

  return newTemplate._id;
};

const createAlternatives = async (id) => {
  const mainDoc = await Template.findById(id).exec();
  const alternatives = mainDoc.alternatives;
  for (let key in alternatives) {
    if (alternatives.hasOwnProperty(key)) {
      if (!alternatives[key]) {
        await createAlternative(id, key);
      }
    }
  }
};

export const setInfoPoints = async (template) => {
  let mainDoc = null;
  if (template.language !== "en") {
    console.log("Create default template because doc is in", template.language);
    mainDoc = await createDefaultTemplate(template);
  }

  template.mainTemplate = mainDoc;

  await Template.findByIdAndUpdate(template._id, template).exec();

  if (mainDoc !== null) {
    await addAlternativeToMainDoc(mainDoc, template.language, template._id);
    console.log("added alternative to mainDoc");
    createAlternatives(mainDoc);
  } else {
    createAlternatives(template._id);
  }
};
