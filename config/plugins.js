module.exports = () => {
  return {
    "protected-populate": {
      enabled: true,
    },
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: [
            "api::character.character",
            "api::concept.concept",
            "api::location.location",
            "api::storyline.storyline",
          ],
        },
      },
    },
  };
};
