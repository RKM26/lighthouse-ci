module.exports = {
    ci: {
      collect: {
        url : 'https://www.marriott.com/default.mi'
      },
      assert: {
        "preset": "lighthouse:recommended", // Change this to "lighthouse:recommended" when we move to a PWA in the future
        assertions: {
            'critical-request-chains': ['off', {}],
            'estimated-input-latency': ['off', {}],
            'final-screenshot': ['off', {}],
            'js-libraries': ['off', {}],
            'largest-contentful-paint-element': ['off', {}],
            'layout-shift-elements': ['off', {}],
            'main-thread-tasks': ['off', {}],
            'network-requests': ['off', {}],
            'network-rtt': ['off', {}],
            'network-server-latency': ['off', {}],
            'resource-summary': ['off', {}],
            'screenshot-thumbnails': ['off', {}],
            'third-party-summary': ['off', {}],
            'total-blocking-time': ['off', {}],
        }
    },

       upload: {
      target: 'lhci',
      serverBaseUrl: 'https://cool-wasps-guess.loca.lt'
    },
      server: {
        // server options here
      },
      wizard: {
        // wizard options here
      },
    },
  };