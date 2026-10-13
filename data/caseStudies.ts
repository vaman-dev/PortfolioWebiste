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
    coverImage: "/images/GridGame.png",
    coverAlt: "Grid-based building placement prototype in Unity",
    screenshots: [
      {
        src: "/images/grid-based-builder.png",
        alt: "Grid-based builder prototype media",
        caption: "Prototype media from the existing Grid Builder project assets.",
      },
      {
        src: "/images/GridGame.png",
        alt: "Grid Builder gameplay environment",
        caption: "Additional existing project media; replace with a more specific placement or validation frame when available.",
      },
    ],
    architectureDiagram: {
      image: "/images/grid-builder-architecture.png",
      alt: "Grid Builder system architecture diagram",
      caption: "Architecture diagram for the Grid Builder system, showing input, placement validation, grid occupancy, previews, and pooling responsibilities.",
    },
    youtubeEmbedUrl: "https://www.youtube.com/embed/3ZkEOCKSBFI",
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
};
