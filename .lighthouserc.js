module.exports = {
    ci: {
      collect: {
        // collect options here
      },
      assert: {
        "preset": "lighthouse:recommended", // Change this to "lighthouse:recommended" when we move to a PWA in the future
        assertions: {
            "maskable-icon": "off",
            "service-worker": "off",
            "tap-targets": "off",
            "apple-touch-icon": "off",
            "first-contentful-paint": { minScore: 0.9 },
            "first-cpu-idle": { minScore: 0.9 },
            "first-cpu-idle": { minScore: 0.9 },
            "interactive": { minScore: 0.9 },
            "last-contentful-paint": { minScore: 0.9 },
            "max-potential-fid": { minScore: 0.9 },
            "render-blocking-resources": { minScore: 0.9 },
            "speed-index": { minScore: 0.9 },
            'categories:performance': ['error', { minScore: 0.9 }],
            'categories:accessibility': ['warn', { minScore: 0.9 }],
        }
    },
      upload: {
        // upload options here
      },
      server: {
        // server options here
      },
      wizard: {
        // wizard options here
      },
    },
  };