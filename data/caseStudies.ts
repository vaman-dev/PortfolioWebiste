export type CaseStudyBlock = {
  title: string;
  description: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type TechnicalDeepDive = {
  title: string;
  problem: string;
  solution: string;
  tradeoff?: string;
  code?: {
    language: string;
    snippet: string;
  };
};

export type ProjectValidation = {
  title: string;
  method: string;
  result: string;
};

export type ProjectArchitecture = {
  image: string;
  alt: string;
  caption?: string;
};

export type CaseStudyFlowStep = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  technologies: string[];
  focusAreas: string[];
  coverImage: string;
  coverAlt: string;
  youtubeEmbedUrl?: string;
  overview: string[];
  challenge: { description: string; goals: string[] };
  architecture: { introduction: string; modules: CaseStudyBlock[] };
  flowchart?: {
    introduction: string;
    steps: CaseStudyFlowStep[];
  };
  implementation: { introduction: string; features: CaseStudyBlock[] };
  results: string[];
  learnings: string[];
  screenshots?: ProjectScreenshot[];
  deepDives?: TechnicalDeepDive[];
  validation?: ProjectValidation[];
  architectureDiagram?: ProjectArchitecture;
  githubUrl?: string;
  demoUrl?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "grid-based-builder-system": {
    slug: "grid-based-builder-system",
    title: "Grid-Based Builder System",
    subtitle: "A Unity technical prototype exploring grid-based placement, rotation-aware footprints, and modular gameplay architecture.",
    role: "Gameplay Systems Programmer",
    status: "Technical Prototype",
    technologies: ["Unity", "C#", "ScriptableObjects", "Object Pooling"],
    focusAreas: ["Grid Systems", "Gameplay Architecture", "Placement Validation", "Data-Driven Design"],
    coverImage: "/images/GridGame.png?v=2",
    coverAlt: "Grid-based building placement prototype in Unity",
    screenshots: [
      {
        src: "/images/grid-based-builder.png",
        alt: "Grid-based builder prototype media",
        caption: "Prototype media from the existing Grid Builder project assets.",
      },
      {
        src: "/images/GridGame.png?v=2",
        alt: "Grid Builder gameplay environment",
        caption: "Additional existing project media; replace with a more specific placement or validation frame when available.",
      },
    ],
    architectureDiagram: {
      image: "/images/grid-builder-architecture.png",
      alt: "Grid Builder system architecture diagram",
      caption: "Architecture diagram for the Grid Builder system, showing input, placement validation, grid occupancy, previews, and pooling responsibilities.",
    },
    youtubeEmbedUrl: "https://www.youtube.com/embed/yF2ZGbEtXm0",
    overview: [
      "This project is a grid-based building system developed in Unity to explore object-oriented programming, modular gameplay systems, and practical software architecture.",
      "Inspired by builder-style games such as Clash of Clans and SimCity, the primary goal was to create a reusable foundation for building placement rather than develop an entire city simulation.",
    ],
    challenge: {
      description: "A flexible placement system must translate world coordinates into discrete grid cells, validate occupancy and bounds, and support buildings with different footprints and rotations.",
      goals: [
        "Separate grid calculations from Unity presentation logic.",
        "Support single-tile and multi-tile buildings.",
        "Prevent placement outside valid grid boundaries.",
        "Account for footprint changes when buildings rotate.",
        "Provide readable visual feedback during placement.",
        "Keep building definitions configurable through data.",
      ],
    },
    architecture: {
      introduction: "The prototype separates grid representation, placement validation, building definitions, and visual feedback into distinct responsibilities.",
      modules: [
        { title: "Grid Core", description: "Pure C# logic for world-to-grid coordinate conversion, tile bounds, and cell occupancy." },
        { title: "Placement Validation", description: "Evaluates whether a building footprint occupies valid, available grid cells." },
        { title: "Building Definitions", description: "ScriptableObject-based configuration for selecting and representing building types." },
        { title: "Placement Preview", description: "Ghost placement feedback and pooled footprint visualization during user interaction." },
      ],
    },
    implementation: {
      introduction: "The implementation focuses on the underlying placement mechanics and a maintainable division of responsibilities.",
      features: [
        { title: "World-to-Grid Conversion", description: "Converts placement positions in world space into discrete grid coordinates." },
        { title: "Tile Occupancy", description: "Tracks occupied cells and checks whether placement remains within grid boundaries." },
        { title: "Multi-Tile Buildings", description: "Supports structures occupying more than one grid cell." },
        { title: "Rotation-Aware Footprints", description: "Adjusts the occupied footprint according to building rotation." },
        { title: "Placement Feedback", description: "Uses ghost previews and pooled footprint visuals to communicate placement state." },
        { title: "Data-Driven Selection", description: "Uses ScriptableObjects to support a UI-driven building selection workflow." },
      ],
    },
    results: [
      "Implemented the MVP grid and placement mechanics described in the project.",
      "Established a reusable foundation for expanding the builder prototype with additional gameplay systems.",
    ],
    learnings: [
      "Separating system responsibilities using object-oriented design.",
      "Applying single-responsibility principles to gameplay architecture.",
      "Using ScriptableObjects for data-driven configurations.",
      "Applying object pooling to repeated visual elements.",
      "Designing gameplay systems for future iteration and extension.",
    ],
    deepDives: [
      {
        title: "Rotation-aware footprint validation",
        problem: "A building footprint cannot be validated as a fixed set of cells once the building can rotate. Its dimensions and candidate cells must be evaluated against the current orientation.",
        solution: "The placement flow derives candidate grid cells from the building footprint and rotation, then checks bounds and occupancy before allowing placement.",
        tradeoff: "Keeping validation separate from visual feedback makes the rules easier to reason about, but requires the preview and commit paths to share the same validation result.",
        code: {
          language: "pseudo-code",
          snippet: "candidateCells = footprint.cellsFor(rotation)\nif (!grid.isWithinBounds(candidateCells)) return Invalid\nif (grid.isOccupied(candidateCells)) return Invalid\nreturn Valid",
        },
      },
      {
        title: "Data-driven building definitions",
        problem: "Hardcoding every building type into placement logic would make the system difficult to extend and tune.",
        solution: "Building definitions are represented as ScriptableObjects so selection and footprint data can be configured independently from the placement system.",
        tradeoff: "The data-driven workflow adds asset setup overhead, but reduces branching in gameplay code and supports more consistent iteration.",
      },
    ],
    validation: [
      {
        title: "Bounds validation",
        method: "Attempt placement near and beyond the grid boundary with different footprint sizes.",
        result: "The placement rules account for the complete footprint rather than checking only the cursor cell.",
      },
      {
        title: "Occupancy validation",
        method: "Attempt placement over occupied and available cells.",
        result: "Placement feedback distinguishes available cells from cells that cannot accept another building.",
      },
      {
        title: "Rotation validation",
        method: "Rotate multi-tile footprints before checking candidate cells.",
        result: "The candidate footprint is recalculated for the active orientation before placement is committed.",
      },
    ],
  },

  "sequence-memory-game": {
    slug: "sequence-memory-game",
    title: "Global Game Jam 2025 - Bubbleton",
    subtitle:
      "A color-sequence interaction game built during my first game jam, with a focused UI flow, countdown sequence, and player feedback loop.",
    role: "Gameplay Programmer",
    status: "Global Game Jam 2025 / First Game Jam",
    technologies: ["Unity", "C#", "Git", "GitHub"],
    focusAreas: ["UI Systems", "Sequence Interaction", "Gameplay Loop", "Team Workflow"],
    coverImage: "/images/GlobalGame-jam.png",
    coverAlt: "Global Game Jam 2025 Bubbleton project screenshot",
    youtubeEmbedUrl: "https://www.youtube.com/embed/JoEJ0ag1Pxg",
    overview: [
      "Bubbleton was created during Global Game Jam 2025 at UnderDogs Studio. It was my first game jam and my first experience turning a small game idea into a playable prototype under a strict time limit.",
      "My work focused on the UI flow and the first phase of the gameplay loop: guiding the player through the countdown, sequence input, and feedback states.",
    ],
    challenge: {
      description:
        "The main challenge was building a clear, playable interaction quickly while the team was working under game-jam time pressure.",
      goals: [
        "Create a simple and readable UI flow.",
        "Implement the first password or color-sequence interaction.",
        "Connect countdown, input, and feedback states.",
        "Keep the interaction approachable for the intended audience.",
      ],
    },
    architecture: {
      introduction:
        "The implemented scope was centered on the player-facing flow rather than a large gameplay architecture. The systems below describe the responsibilities I worked on during the jam.",
      modules: [
        {
          title: "UI Flow",
          description:
            "Moves the player through the relevant screens and interaction states.",
        },
        {
          title: "Countdown Sequence",
          description:
            "Prepares the player for the interaction and gives the gameplay phase a clear start.",
        },
        {
          title: "Sequence Input",
          description:
            "Collects the player’s password or color-sequence response during the first gameplay phase.",
        },
        {
          title: "Feedback Loop",
          description:
            "Communicates the result of the interaction and moves the prototype forward.",
        },
      ],
    },
    flowchart: {
      introduction:
        "Simplified gameplay flow based on the UI and first interaction phase I implemented during the game jam.",
      steps: [
        {
          title: "Start the game",
          description: "The player enters the Bubbleton gameplay flow.",
        },
        {
          title: "Countdown",
          description: "The UI prepares the player for the next interaction.",
        },
        {
          title: "Show the sequence",
          description: "The player receives the password or color-sequence prompt.",
        },
        {
          title: "Player input",
          description: "The player enters a response through the interaction UI.",
        },
        {
          title: "Check the response",
          description: "The input is evaluated as part of the gameplay phase.",
        },
        {
          title: "Give feedback",
          description: "The UI communicates the result and supports the next state.",
        },
        {
          title: "Continue the loop",
          description: "The prototype proceeds through its remaining playable flow.",
        },
      ],
    },
    implementation: {
      introduction:
        "I implemented the player-facing systems needed to make the first gameplay phase understandable and playable.",
      features: [
        {
          title: "Screen and UI Transitions",
          description:
            "Connected the relevant screens and states so the player could follow the intended flow.",
        },
        {
          title: "Password / Sequence Input",
          description:
            "Implemented the first interaction phase around entering the required sequence.",
        },
        {
          title: "Countdown and Feedback",
          description:
            "Added the timing and feedback flow needed to communicate what happens before and after input.",
        },
        {
          title: "Team Workflow",
          description:
            "Used Git and GitHub as part of the team-based game-jam development process.",
        },
      ],
    },
    results: [
      "Contributed a playable UI and first gameplay phase to the Bubbleton prototype.",
      "Completed my first official game-jam implementation under time constraints.",
    ],
    learnings: [
      "How to make focused implementation decisions during a short game jam.",
      "How UI states and feedback shape a simple gameplay loop.",
      "The basics of collaborating with Git and GitHub on a team project.",
      "Why a small playable system is more valuable than an unfinished large feature.",
    ],
  },

  "ai-npc-experiments": {
    slug: "ai-npc-experiments",
    title: "AI NPC Experiments",
    subtitle:
      "A Unity 6 runtime integration connecting Conversational AI, real-time embodiment, and autonomous gameplay actions.",
    role: "Gameplay / AI Programmer",
    status: "Technical Integration Prototype",
    technologies: ["Unity 6", "C#", "WebRTC", "LiveKit", "Conversational AI"],
    focusAreas: [
      "Runtime Integration",
      "Multi-Modal AI",
      "NPC Embodiment",
      "Gameplay Actions",
    ],
    coverImage: "/images/AI%20NPC%20EXPERIMENT.png",
    coverAlt: "AI NPC Experiments Unity prototype showing conversational NPC interaction",
    youtubeEmbedUrl: "https://www.youtube.com/embed/DUFaOHCq460",
    screenshots: [
      {
        src: "/images/AI%20NPC%20EXPERIMENT.png",
        alt: "AI NPC Experiments Unity prototype",
        caption: "AI NPC Experiments prototype media from the project.",
      },
    ],
    overview: [
      "This project was built to integrate a production-ready Conversational AI SDK into Unity 6, transforming static NPCs into responsive, real-time conversational agents. The goal was to bridge cloud-based multi-modal AI with interactive 3D gameplay without sacrificing frame budgets or game feel.",
      "My work focused on engineering the core runtime integration and event pipeline: managing low-latency WebRTC audio streaming, synchronizing multi-modal embodiment including viseme lip-sync, gaze, and facial emotions, and routing autonomous gameplay action commands directly into Unity gameplay systems.",
    ],
    challenge: {
      description:
        "The core challenge was coordinating high-frequency streaming network data with Unity's frame loop while maintaining strict performance budgets, zero-allocation memory constraints, and deterministic gameplay states.",
      goals: [
        "Create a zero-allocation event dispatching pipeline to eliminate garbage collection spikes during continuous audio streaming.",
        "Synchronize streaming TTS network audio with facial viseme blendshapes within a strict sub-300ms latency window.",
        "Build a decoupled action execution pattern allowing generative AI to autonomously drive NavMesh movement, gaze, and animations.",
        "Resolve conversational focus across multiple simultaneous NPCs without dialogue flickering or abrupt interruptions.",
      ],
    },
    architecture: {
      introduction:
        "The architecture follows strict Domain-Driven Design principles, cleanly decoupling low-level network streaming from high-level gameplay entities through an abstract domain event bus.",
      modules: [
        {
          title: "Low-Allocation Event Bus (EventHub)",
          description:
            "A thread-safe, copy-on-write event broker managing runtime domain events with O(1) lock-free dispatching and main-thread task marshaling.",
        },
        {
          title: "Real-Time Audio & Transport Layer",
          description:
            "Integrates native LiveKit WebRTC streaming, microphone capture, hardware audio resampling, and bidirectional Opus channels.",
        },
        {
          title: "Embodiment & Affective Pipeline",
          description:
            "Drives real-time facial blendshapes for lip-sync visemes, three-dimensional emotion values across valence, arousal, and dominance, and procedural eye gaze.",
        },
        {
          title: "Action Dispatcher & Archetypes",
          description:
            "An extensible command executor supporting 21+ gameplay archetypes including NavMesh locomotion, gestures, object observation, and UnityEvents.",
        },
      ],
    },
    flowchart: {
      introduction:
        "Conceptual conversational lifecycle based on the runtime integration and gameplay pipeline implemented for this system. It shows how voice input becomes synchronized NPC embodiment and gameplay action execution.",
      steps: [
        {
          title: "Player voice input",
          description:
            "Microphone capture receives the player's conversational input in Unity.",
        },
        {
          title: "WebRTC transport",
          description:
            "LiveKit carries bidirectional audio through the real-time transport layer.",
        },
        {
          title: "Domain event distribution",
          description:
            "EventHub routes streaming and conversation events between runtime systems.",
        },
        {
          title: "AI response stream",
          description:
            "The Conversational AI runtime produces speech, emotion, and gameplay action data.",
        },
        {
          title: "NPC embodiment",
          description:
            "Audio timing anchors visemes while gaze and facial emotion update the character presentation.",
        },
        {
          title: "Action execution",
          description:
            "The action dispatcher invokes typed gameplay commands such as movement, gestures, and observation.",
        },
        {
          title: "Gameplay feedback",
          description:
            "Unity gameplay state and player context feed back into the next conversational interaction.",
        },
      ],
    },
    implementation: {
      introduction:
        "I developed the runtime integration and gameplay systems required to make autonomous conversational agents responsive, performant, and extensible.",
      features: [
        {
          title: "Copy-on-Write Event Broker",
          description:
            "Implemented a low-allocation EventHub utilizing immutable subscriber arrays and weak-reference pruning, achieving zero runtime GC pressure during speech.",
        },
        {
          title: "WebRTC Audio Streaming & Lip-Sync Anchors",
          description:
            "Configured native LiveKit FFI streaming and tied blendshape viseme evaluation directly to AudioSource.timeSamples to eliminate audio-lip desynchronization.",
        },
        {
          title: "Decoupled Action Executor Pattern",
          description:
            "Authored the IConvaiActionExecutor command architecture with typed parameters and strict lifecycle completion guarantees covering success, failure reasons, and timeouts.",
        },
        {
          title: "Spatial Conversation Targeting Heuristics",
          description:
            "Engineered gaze-cone angle checks, proximity thresholds, and hold delays through switchDelaySeconds to reliably arbitrate player focus in multi-NPC scenes.",
        },
      ],
    },
    results: [
      "Integrated a low-latency Conversational AI pipeline operating with < 0.2ms main-thread frame overhead in Unity 6.",
      "Achieved sub-300ms turn response latency with zero main-thread GC allocations during active speech turns.",
      "Implemented 21+ autonomous gameplay action archetypes, bridging generative AI decision-making with Unity physics and NavMesh locomotion.",
    ],
    learnings: [
      "How to design low-allocation Copy-on-Write data structures to handle high-frequency network data in Unity without triggering GC spikes.",
      "The importance of hardware timeline anchoring when synchronizing procedural animations with streaming network audio.",
      "How spatial hysteresis and hold timers prevent jitter when managing player attention across multiple game entities.",
      "Why strict command completion guarantees are essential when driving game behavior trees and state machines from external AI models.",
    ],
  },

  "advanced-third-person-controller": {
    slug: "advanced-third-person-controller",
    title: "VR Desert Experience -Soldier's Perspective",
    subtitle:
      "An immersive virtual reality environment created for an Army Institute of Technology sand-model presentation.",
    role: "Programmer",
    status: "VR Presentation Prototype",
    technologies: ["Unity", "Virtual Reality", "Environment Presentation", "AIT Sand Model"],
    focusAreas: [
      "Immersive Viewpoint",
      "Desert Environment",
      "VR Presentation",
      "Human-Scale Perspective",
    ],
    coverImage: "/images/VR%20Sand%20Model.png",
    coverAlt: "VR Desert Experience environment created for the AIT sand-model presentation",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/I1-ODyeF76M",
    screenshots: [
      {
        src: "/images/VR%20Sand%20Model.png",
        alt: "VR Desert Experience sand-model presentation environment",
        caption:
          "Project media from the VR Desert Experience created for the AIT sand-model presentation.",
      },
    ],
    overview: [
      "This project is an immersive virtual reality experience created as part of a sand-model presentation at the Army Institute of Technology, Pune.",
      "The objective was to help the institute's Chairman experience a remote desert environment from the perspective of a soldier, going beyond the conventional view offered by a physical sand model.",
      "By presenting the environment through VR, the project aimed to communicate the sense of scale, isolation, and surrounding terrain more directly.",
      "My role was Programmer, responsible for programming contributions to the VR experience.",
    ],
    challenge: {
      description:
        "The primary challenge was translating a desert environment represented through a sand-model presentation into an immersive, human-scale virtual experience. Rather than presenting only an external overview of the terrain, the experience needed to communicate what it might feel like to be situated inside that landscape.",
      goals: [
        "Translate the sand-model concept into an immersive VR presentation.",
        "Represent a remote, sparsely populated desert environment from a human-scale perspective.",
        "Communicate environmental scale and isolation through a first-person viewpoint.",
        "Create an experience suitable for demonstration to a non-technical audience.",
        "Integrate programming and environmental content into a coherent VR prototype.",
        "Prioritize clarity and usability during the presentation.",
      ],
    },
    architecture: {
      introduction:
        "The following architecture describes the experience through functional responsibilities. It is a logical documentation model and should be refined against the final Unity scene and scripts as those implementation details are confirmed.",
      modules: [
        {
          title: "VR Viewpoint",
          description:
            "Presents the virtual environment from the user's point of view and supports the intended soldier's-eye perspective.",
        },
        {
          title: "Interaction & Movement",
          description:
            "Represents the input and navigation functionality used to experience or observe the environment. The exact locomotion method remains implementation-specific.",
        },
        {
          title: "Desert Environment",
          description:
            "Contains the terrain, environmental assets, and spatial layout used to communicate the remote desert setting.",
        },
        {
          title: "Experience Flow",
          description:
            "Organizes the sequence of actions and viewpoints that support the sand-model presentation and communicate the intended experience.",
        },
      ],
    },
    flowchart: {
      introduction:
        "Conceptual presentation flow for the VR Desert Experience, based on the stated sand-model demonstration purpose rather than an unverified class or scene graph.",
      steps: [
        {
          title: "Launch VR experience",
          description: "Start the Unity application and prepare the headset presentation.",
        },
        {
          title: "Present VR viewpoint",
          description: "Place the viewer inside the desert environment at a human-scale perspective.",
        },
        {
          title: "Explore or observe",
          description: "Use the implemented viewing or navigation controls to experience the environment.",
        },
        {
          title: "Communicate scale and isolation",
          description: "Use the surrounding terrain and spatial composition to complement the physical sand model.",
        },
        {
          title: "Complete presentation",
          description: "Deliver a clear, accessible demonstration for the intended non-technical audience.",
        },
      ],
    },
    implementation: {
      introduction:
        "The programming work focused on supporting an immersive desert-environment demonstration within a virtual reality experience.",
      features: [
        {
          title: "Immersive Viewpoint",
          description:
            "Presented the environment at a human scale to support the intended soldier's-eye perspective.",
        },
        {
          title: "Environment Integration",
          description:
            "Brought the desert scene and the interactive VR application together into a coherent experience.",
        },
        {
          title: "Interaction and Navigation",
          description:
            "Supported the way the viewer explores or observes the environment during the demonstration.",
        },
        {
          title: "Presentation Experience",
          description:
            "Organized the experience around a clearly defined audience and purpose rather than a traditional gameplay loop.",
        },
        {
          title: "Prototype Integration",
          description:
            "Combined programming and scene content into a demonstrable VR project.",
        },
      ],
    },
    deepDives: [
      {
        title: "Translating Terrain into Human-Scale VR",
        problem:
          "A sand model provides an external overview of a landscape, but does not directly communicate how the same environment appears from ground level.",
        solution:
          "Used a VR viewpoint and desert scene composition to communicate the surrounding terrain at a scale appropriate for the viewer.",
        tradeoff:
          "Environmental detail must be balanced against VR rendering performance and a clear viewing experience.",
      },
      {
        title: "Designing a VR Experience for a Presentation",
        problem:
          "The demonstration needed to convey the intended setting clearly to a viewer who may be unfamiliar with VR controls.",
        solution:
          "Prioritized an accessible viewing experience and organized interaction around the demonstration's objectives.",
        tradeoff:
          "Complex interactions may increase immersion but also introduce unnecessary difficulty during a short demonstration.",
      },
    ],
    validation: [
      {
        title: "Environment presentation",
        method: "Run the experience in the headset and confirm that the desert scene appears correctly.",
        result: "The demonstration should present the intended environment without missing scene content or setup issues.",
      },
      {
        title: "Viewpoint",
        method: "Check the terrain from the intended human-scale perspective.",
        result: "The viewpoint should communicate the surrounding terrain and soldier's-eye perspective clearly.",
      },
      {
        title: "Interaction and presentation flow",
        method: "Use the implemented controls and complete the demonstration sequence.",
        result: "The experience should remain predictable and understandable for the intended audience.",
      },
      {
        title: "VR usability",
        method: "Observe the demonstration for comfort and clarity during the presentation.",
        result: "Device-specific performance measurements and audience feedback should be added when available.",
      },
    ],
    results: [
      "Developed a VR experience as part of an Army Institute of Technology sand-model presentation.",
      "Contributed programming work to an immersive desert environment.",
      "Designed the experience around communicating a soldier's perspective to the institute's Chairman.",
      "Explored how virtual reality can complement physical models with a human-scale environmental viewpoint.",
    ],
    learnings: [
      "Understanding how immersive presentation differs from traditional gameplay design.",
      "Considering real-world audiences when developing interactive experiences.",
      "Working with environmental scale and spatial perception in VR.",
      "Aligning technical implementation with a specific demonstration objective.",
    ],
  },
};
