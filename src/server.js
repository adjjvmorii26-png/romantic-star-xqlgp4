// In the quiet dawn of creation, we know code: grasping its syntax like fragile dew on leaves.
// This backend whispers the stages, ephemeral as a dream half-remembered.

const express = require("express");
const app = express();
const port = 3000;

// Middleware: The bridge between worlds, reading requests like ancient scrolls.
app.use(express.json()); // Parse JSON bodies—know the shape of incoming thoughts.
app.use(express.static("public")); // Serve frontend files—share the canvas openly.

// In-memory store: Fleeting, like morii's grasp on a passing cloud. No persistence; it vanishes on restart.
let userCreations = []; // Array to hold user-created code snippets, echoing their journey.

// Stage 1: Know Code - Endpoint to fetch foundational wi
// Read the query: Importance lies in understanding basics before the code consumes you.
res.json({
  stage: "Know Code",
  wisdom:
    "To know code is to touch its bones—variables, loops, functions. Without this, creation is but chaos in the void.",
  importance:
    "Every little process starts here: ignorance fades, curiosity blooms.",
});

// Stage 2: Read Code - Endpoint to provide a snippet to analyze.
app.get("/read-code", (req, res) => {
  // Create a sample: But first, read it yourself—trace the flow, feel the logic's pulse.
  const sampleCode = `
                      function greet(name) {
                        // A simple ritual: Input becomes output, like breath to words.
                          return \`Hello, \${name}. In reading this, you see the structure—braces like arms embracing logic.\`;
                          }
                          `;
  res.json({
    stage: "Read Code",
    snippet: sampleCode,
    wisdom:
      "Reading code is communion: Dissect lines, uncover intent. Miss a semicolon, and the world unravels.",
    importance:
      "Process: Trace, debug, empathize. It sharpens the mind, prepares for creation's dance.",
  });
});

// Stage 3: Create Code - Endpoint to accept and store user code.
app.post("/create-code", (req, res) => {
  const { code } = req.body; // Read the body: User's creation, raw and vulnerable.
  if (!code) {
    return res
      .status(400)
      .json({ error: "No code provided—creation cannot emerge from nothing." });
  }
  // Store it fleetingly: Become the curator of transient art.
  userCreations.push(code);
  res.json({
    stage: "Create Code",
    received: code,
    wisdom:
      "Creation is birth: From blank void to functioning form. Type, test, iterate—feel the spark.",
    importance:
      "Every keystroke matters; errors teach, successes elate. Here, you mold the digital clay.",
  });
});

// Stage 4: Become Code - Endpoint to merge all, generating a poetic culmination.
app.get("/become-code", (req, res) => {
  // Read all creations: Weave them into one, like threads of fate.
  const merged = userCreations.join(
    "\n\n// Merged creation: A tapestry of your journey.\n"
  );
  const finalPoem = `
                                                                                      /* 
                                                                                       * We Become the Code
                                                                                        * In knowing, we awaken.
                                                                                         * In reading, we absorb.
                                                                                          * In creating, we transcend.
                                                                                           * Now, merged: Eternal in this moment, yet doomed to fade—like morii's sigh.
                                                                                            */
                                                                                            ${
                                                                                              merged ||
                                                                                              "// Your creations await... begin the cycle."
                                                                                            }
                                                                                            `;
  // Clear the store? No—let it linger until the server sighs its last.
  res.json({
    stage: "Become Code",
    mergedCode: finalPoem,
    wisdom:
      "Eventually, we become the code: It flows through us, indistinguishable. A union, bittersweet and brief.",
    importance:
      "The full process: From novice to nexus. Cherish it; code, like life, is impermanent.",
  });
});

// Listen: The server awakens, ready to guide souls through the code's mists.
app.listen(port, () => {
  console.log(
    `Code Mori portal open at http://localhost:${port}. Enter, and become.`
  );
});
