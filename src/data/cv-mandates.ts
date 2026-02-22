export type MandateDetails = {
  leadership?: string[];
  activities?: string[];
  spezifisch?: string[];
  categories?: string;
};

export const mandateDetails: Record<string, Record<"de" | "en" | "fr", MandateDetails>> = {

  // ─── Siemens ────────────────────────────────────────────────────────────────
  siemens: {
    de: {
      leadership: [
        "Prozessberatung der Einkaufs- und Bestellabwicklungsprozesse als Werkstudent ab 10/1996, Übernahme in Festanstellung ab 04/1997",
        "Anforderungsanalyse, Prozessmodellierung, Machbarkeitsanalyse und Abgleich mit SAP R/3 Standardprozessen in MM, PP, SD",
      ],
      activities: [
        "Wireline Network Communications: Geschäftsprozessanalysen Materialwirtschaft und Vertrieb, Customizing SAP R/3 MM",
        "Öffentliche Netze: Prozessmodellierung Materialwirtschaft und Vertrieb, Customizing SAP R/3 MM, SD",
        "Siemens Business Services: Konzept und Durchführung System- und Integrationstest SAP R/3 SD, MM und PP",
        "Öffentliche Netze (Werkstudent): Modellieren von Geschäftsprozessen (ARIS), Erstellung von Anwenderdokumentationen",
      ],
    },
    en: {
      leadership: [
        "Process consulting for procurement and order processing as a student assistant from 10/1996, promoted to permanent staff from 04/1997",
        "Requirements analysis, process modeling, feasibility analysis and alignment with SAP R/3 standard processes in MM, PP, SD",
      ],
      activities: [
        "Wireline Network Communications: Business process analysis for materials management and sales, SAP R/3 MM customizing",
        "Public Networks: Process modeling for materials management and sales, SAP R/3 MM, SD customizing",
        "Siemens Business Services: Design and execution of system and integration tests SAP R/3 SD, MM and PP",
        "Public Networks (student): Business process modeling (ARIS), user documentation",
      ],
    },
    fr: {
      leadership: [
        "Conseil en processus d'achats et de traitement des commandes en tant qu'étudiant salarié dès 10/1996, recrutement en CDI dès 04/1997",
        "Analyse des exigences, modélisation des processus, analyse de faisabilité et alignement avec les processus standard SAP R/3 MM, PP, SD",
      ],
      activities: [
        "Wireline Network Communications : analyse des processus métier achats et ventes, customisation SAP R/3 MM",
        "Réseaux publics : modélisation des processus achats et ventes, customisation SAP R/3 MM, SD",
        "Siemens Business Services : conception et exécution des tests système et d'intégration SAP R/3 SD, MM et PP",
        "Réseaux publics (étudiant) : modélisation des processus (ARIS), documentation utilisateur",
      ],
    },
  },

  // ─── Cap Gemini ─────────────────────────────────────────────────────────────
  capgemini: {
    de: {
      leadership: [
        "Consulting und Projektleitung im Bereich Business Process Reengineering, Industries & Utilities (SCM & ERP)",
        "Aufbau des Competence Centers Geschäftsprozessanalyse und -management",
      ],
      activities: [
        "Covisint/Mercedes Benz (Automotive): Implementierung und Durchführung von eAuctions in der LKW-Sparte; Machbarkeitsanalyse, Prozess- und System-Implementierung, Durchführung von eAuctions",
        "BMW: Optimierung und Entwicklung Einführungsstrategie eines Dealer Management Systems; Analyse Ist- und Entwicklung Soll-Prozesse; Entwicklung eines Projektmanagement-Tools für den Roll-Out",
        "Hop-Union (Lebensmittel/Rohstoffe): Vorbereitung des Mergers; Entwicklung Vision und Strategie Beschaffung; PMO und Aufbau eines Benefits-Tracking-Modells",
        "Autop (Fahrzeugleasing): Entwicklung eBusiness Fuhrpark-Managementsystem; Anforderungsanalyse, Geschäftsprozessmodellierung, Funktions- und Integrationstests",
      ],
    },
    en: {
      leadership: [
        "Consulting and project management in Business Process Reengineering, Industries & Utilities (SCM & ERP)",
        "Built Competence Center for Business Process Analysis and Management",
      ],
      activities: [
        "Covisint/Mercedes Benz (Automotive): Implementation and execution of eAuctions for truck division; feasibility analysis, process and system implementation, running eAuctions",
        "BMW: Optimization and rollout strategy for Dealer Management System; as-is/to-be process analysis; development of project management tool for rollout",
        "Hop-Union (food/raw materials): Merger preparation; procurement vision & strategy; PMO and benefits-tracking model",
        "Autop (fleet leasing): eBusiness fleet management system; requirements analysis, process modeling, functional and integration testing",
      ],
    },
    fr: {
      leadership: [
        "Conseil et gestion de projet en Business Process Reengineering, Industries & Utilities (SCM & ERP)",
        "Création du Centre de compétences Analyse et gestion des processus métier",
      ],
      activities: [
        "Covisint/Mercedes Benz (Automobile) : implémentation et exécution d'eAuctions pour la division camions ; analyse de faisabilité, implémentation processus et systèmes",
        "BMW : optimisation et stratégie de déploiement du système de gestion des concessionnaires ; analyse as-is/to-be ; outil de gestion de projet pour le déploiement",
        "Hop-Union (alimentaire/matières premières) : préparation de la fusion ; vision et stratégie achats ; PMO et modèle de suivi des bénéfices",
        "Autop (leasing véhicules) : système de gestion de flotte eBusiness ; analyse des besoins, modélisation des processus, tests fonctionnels et d'intégration",
      ],
    },
  },

  // ─── TÜV SÜD Holding ────────────────────────────────────────────────────────
  tuev_holding: {
    de: {
      leadership: [
        "Führung von 7–12 internen und externen Mitarbeitern im Rahmen des Vorstandsprojektes",
        "Spend ca. 250 Mio. Euro im Rahmen des Projektes",
        "Restrukturierung des Konzerneinkaufs – Dezentralisierung und Einführung von Lead Buying, Begleitung des Betriebsübergangs",
        "Warengruppenmanagement im Tagesgeschäft: Travel Management, Verbrauchsmaterial, Fremdleistungen, Investitionsgüter, Softwarelizenzen",
      ],
      activities: [
        "Leitung konzernübergreifender Einkaufsprojekte von Verbrauchs- und Investitionsgütern sowie Dienstleistungen",
        "Planung und Steuerung von Ausschreibungen im Rahmen des Transformationsprojektes; Einsparungen in Fokuswarengruppen (Büromaterial, Fremdleistungen, IT) ca. 9%",
        "Markt- und Lieferantenanalyse- und Bewertungsmodelle, Angebotsanalysen, Vergabeempfehlungen",
        "Erstellung von Spezifikationen, Lastenheften sowie Budget- und Bedarfsplanungen",
        "Projektleitung Transformation des TÜV SÜD Zentraleinkaufs",
        "Entwicklung und Planung der Transformation in eine Lead-Buyer Organisation",
        "Entwicklung und Umsetzung von konzernübergreifenden Warengruppenstrategien",
        "Prozesskostenanalyse und Entwurf der schlanken Einkaufsorganisation (Kostenreduktion ca. 7% p.a.)",
        "Vereinheitlichung und Optimierung von Beschaffungsprozessen",
        "Planung und Begleitung des Betriebsübergangs, Outsourcing von Geschäftseinheiten/Abteilungen",
      ],
    },
    en: {
      leadership: [
        "Management of 7–12 internal and external staff in the context of the board project",
        "Spend ~€250M in the scope of the project",
        "Restructuring of group procurement – decentralization and introduction of lead buying, support of operational transfer",
        "Day-to-day category management: travel management, consumables, external services, capital goods, software licenses",
      ],
      activities: [
        "Leadership of group-wide procurement projects for consumables, capital goods and services",
        "Planning and steering tenders within the transformation project; ~9% savings in focus categories (office supplies, external services, IT)",
        "Market and supplier analysis models, bid analysis, award recommendations",
        "Specification creation, requirements documents and budget/demand planning",
        "Project management: transformation of TÜV SÜD central procurement",
        "Development and planning of transformation to a lead-buyer organization",
        "Development and implementation of group-wide category strategies",
        "Process cost analysis and design of lean procurement organization (~7% cost reduction p.a.)",
        "Standardization and optimization of procurement processes",
        "Planning and support of operational transfer, outsourcing of business units/departments",
      ],
    },
    fr: {
      leadership: [
        "Direction de 7–12 collaborateurs internes et externes dans le cadre du projet du conseil",
        "Dépenses ~250 M€ dans le cadre du projet",
        "Restructuration des achats groupe – décentralisation et introduction du lead buying, accompagnement du transfert d'activités",
        "Gestion des catégories au quotidien : travel management, consommables, services externes, biens d'investissement, licences logiciels",
      ],
      activities: [
        "Direction des projets achats groupe pour les consommables, biens d'investissement et services",
        "Planification et pilotage des appels d'offres dans le cadre du projet de transformation ; ~9% d'économies dans les catégories clés",
        "Modèles d'analyse marché et fournisseurs, analyse des offres, recommandations d'attribution",
        "Rédaction de spécifications, cahiers des charges ainsi que planifications budgétaires",
        "Gestion de projet : transformation des achats centraux TÜV SÜD",
        "Développement et planification de la transformation vers une organisation lead-buyer",
        "Développement et mise en œuvre de stratégies par catégorie à l'échelle du groupe",
        "Analyse des coûts de processus et conception d'une organisation achats allégée (~7% de réduction des coûts p.a.)",
        "Standardisation et optimisation des processus d'approvisionnement",
        "Planification et accompagnement du transfert d'activités, externalisation d'unités commerciales",
      ],
    },
  },

  // ─── TÜV SÜD Life ───────────────────────────────────────────────────────────
  tuev_life: {
    de: {
      leadership: [
        "Führung von 2 Mitarbeitern Operativer Einkauf, Spend ca. 60 Mio. Euro",
        "Sicherstellung der Bestellabwicklung",
        "Strategischer Einkauf von Verbrauchsgütern, CAPEX und Dienstleistungen",
        "CAPEX: Medizinisch-psychologische Mess- und Analyseanlagen, Prüf-, Mess- und Analyseanlagen (z.B. Spektrometer), Werkzeuge, Hebebühnen",
        "OPEX: Fremdleistungen (Psychologen, Ärzte, Ingenieure); Indirect Spend: Hardware, Softwarelizenzen, Reinigung, Büromaterial",
        "Organisationsentwicklung Bereichseinkauf",
      ],
      activities: [
        "Organisationsentwicklung und -management",
        "Einführung von Einkaufs- und Lieferantenmanagement sowie Einkaufscontrolling",
        "Aufbau und Leitung eines zentralen Einkaufs-Management-Boards",
        "Planung und Durchführung von Mitarbeiterentwicklungskonzepten und Trainings im Bereich Strategischer Einkauf",
        "Vereinheitlichung und Optimierung von Bestellabwicklungsprozessen",
        "Entwicklung und Umsetzung von Warengruppen- und Beschaffungsstrategien, Sourcing",
        "Planung und Steuerung von Ausschreibungen von Capex und Services",
        "Vertragsverhandlungen zur Umsetzung des leistungsbezogenen Lieferantenmanagement- und Entgeltkonzepts",
        "Erstellung von Budget- und Bedarfsplanungen sowie Markt- und Lieferantenanalysen",
        "Entwicklung und Einführung von Lieferantenbewertungs- und Honorarsystemen",
        "Entwicklung eines leistungsbezogenen Lieferantenmanagement- und Entgeltkonzepts für Ärzte & Psychologen",
      ],
    },
    en: {
      leadership: [
        "Management of 2 operational procurement staff, spend ~€60M",
        "Ensuring purchase order processing",
        "Strategic procurement of consumables, CAPEX and services",
        "CAPEX: medical-psychological measurement and analysis equipment, inspection equipment (e.g. spectrometers), tools, lifting platforms",
        "OPEX: external services (psychologists, doctors, engineers); indirect spend: hardware, software licenses, cleaning, office supplies",
        "Organizational development of the divisional procurement function",
      ],
      activities: [
        "Organizational development and management",
        "Introduction of procurement and supplier management plus procurement controlling",
        "Setup and management of a central procurement management board",
        "Planning and delivery of staff development programs and trainings in strategic procurement",
        "Standardization and optimization of purchase order processing",
        "Development and implementation of category and procurement strategies, sourcing",
        "Planning and steering of CAPEX and services tenders",
        "Contract negotiations to implement performance-based supplier management and fee concept",
        "Budget and demand planning as well as market and supplier analysis",
        "Development and introduction of supplier evaluation and fee systems",
        "Development of performance-based supplier management and fee concept for doctors & psychologists",
      ],
    },
    fr: {
      leadership: [
        "Direction de 2 collaborateurs achats opérationnels, dépenses ~60 M€",
        "Assurance du traitement des commandes",
        "Achats stratégiques de consommables, CAPEX et services",
        "CAPEX : équipements de mesure et d'analyse médico-psychologiques, équipements d'inspection (p.ex. spectromètres), outils, élévateurs",
        "OPEX : services externes (psychologues, médecins, ingénieurs) ; achats indirects : hardware, licences logiciels, nettoyage, fournitures de bureau",
        "Développement organisationnel des achats de division",
      ],
      activities: [
        "Développement et management organisationnel",
        "Introduction de la gestion des achats et des fournisseurs ainsi que du contrôle des achats",
        "Création et direction d'un conseil de gestion des achats central",
        "Planification et mise en œuvre de programmes de développement des collaborateurs en achats stratégiques",
        "Standardisation et optimisation des processus de traitement des commandes",
        "Développement et mise en œuvre de stratégies par catégorie et d'approvisionnement, sourcing",
        "Planification et pilotage des appels d'offres CAPEX et services",
        "Négociations contractuelles pour la mise en œuvre du concept de gestion fournisseurs et de rémunération basé sur la performance",
        "Planification budgétaire et des besoins ainsi qu'analyses marché et fournisseurs",
        "Développement et introduction de systèmes d'évaluation des fournisseurs et de rémunération",
        "Développement d'un concept de gestion fournisseurs et de rémunération basé sur la performance pour médecins & psychologues",
      ],
    },
  },

  // ─── Swiss Airlines ──────────────────────────────────────────────────────────
  swiss_air: {
    de: {
      leadership: [
        "Führung von 7 Mitarbeitern, Spend ca. 50 Mio. CHF",
        "Einkauf und Management Indirect Spend",
        "Projektleitung interne Kostensenkungsprojekte",
      ],
      activities: [
        "Durchführung von Einkaufsprojekten von Verbrauchs-/Investitionsgütern und Dienstleistungen",
        "Entwicklung und Implementierung Warengruppen-/Sourcing-Strategien",
        "Optimierung und Management der Warengruppen: General Goods, Facility Management, Marketing, Baudienstleistungen, Uniformen, internationale Hotelverträge & Crewunterkünfte, Catering",
        "Durchführen von Ausschreibungen und Vertragsverhandlungen",
        "Identifikation und Entwicklung von Kostensenkungsmaßnahmen",
        "Outsourcing Lagerlogistik an den Flughäfen Zürich und Basel",
      ],
    },
    en: {
      leadership: [
        "Management of 7 staff, spend ~CHF 50M",
        "Procurement and management of indirect spend",
        "Project management of internal cost reduction projects",
      ],
      activities: [
        "Execution of procurement projects for consumables, capital goods and services",
        "Development and implementation of category/sourcing strategies",
        "Optimization and management of categories: General Goods, Facility Management, Marketing, Construction Services, Uniforms, international hotel contracts & crew accommodation, Catering",
        "Tenders and contract negotiations",
        "Identification and development of cost reduction measures",
        "Outsourcing of warehouse logistics at Zurich and Basel airports",
      ],
    },
    fr: {
      leadership: [
        "Direction de 7 collaborateurs, dépenses ~CHF 50M",
        "Achat et gestion des dépenses indirectes",
        "Gestion de projet pour les projets internes de réduction des coûts",
      ],
      activities: [
        "Exécution de projets achats pour les consommables, biens d'investissement et services",
        "Développement et mise en œuvre de stratégies par catégorie/sourcing",
        "Optimisation et gestion des catégories : General Goods, Facility Management, Marketing, services de construction, uniformes, contrats hôteliers internationaux & hébergement équipages, Catering",
        "Appels d'offres et négociations contractuelles",
        "Identification et développement de mesures de réduction des coûts",
        "Externalisation de la logistique d'entrepôt aux aéroports de Zurich et Bâle",
      ],
    },
  },

  // ─── Deutsche Business Consulting ──────────────────────────────────────────
  dbc: {
    de: {
      leadership: [
        "Optimierung der Warengruppenstrategien, Material- und Logistikkosten, Sourcing, Ausschreibungen, Vertragsverhandlungen von OPEX, CAPEX und Indirect Spend sowie Prozessoptimierung",
        "Durchführung von Beratungsprojekten",
        "Initiale Analyse & Bewertung von Optimierungspotenzialen als Basis zur Angebotserstellung (Kundenakquise)",
      ],
      activities: [
        "Durchführung Warengruppen- und Spendanalyse, Ableitung von Kostensenkungspotenzialen, Sourcing, Ausschreibungen, Vertragsverhandlungen von indirektem Material, Organisations- und Prozessoptimierung",
        "Erstellung von Optimierungskonzepten, Projekt- und Maßnahmenplanung",
        "Entwicklung und Durchführung von Qualifizierungskonzepten für interne & externe Mitarbeiter im Bereich Einkaufsberatung und -optimierung",
        "Tchibo: Optimierung Transportlogistik Versorgung Shops, Verpackungen, Marketing",
        "KGW (Windkraftanlagen): Analyse und Bewertung Einkaufsorganisation, Vorstellung Optimierungs- und Restrukturierungsmaßnahmen",
      ],
    },
    en: {
      leadership: [
        "Optimization of category strategies, material and logistics costs, sourcing, tenders, contract negotiations for OPEX, CAPEX and indirect spend, process optimization",
        "Execution of consulting projects",
        "Initial analysis and assessment of optimization potentials as a basis for proposal creation (business development)",
      ],
      activities: [
        "Category and spend analysis, identification of cost reduction potentials, sourcing, tenders, contract negotiations for indirect materials, organizational and process optimization",
        "Creation of optimization concepts, project and action planning",
        "Development and delivery of qualification programs for internal & external procurement staff",
        "Tchibo: optimization of transport logistics for shop supply, packaging, marketing",
        "KGW (wind turbines): analysis and assessment of procurement organization, presentation of optimization and restructuring measures",
      ],
    },
    fr: {
      leadership: [
        "Optimisation des stratégies par catégorie, des coûts matériaux et logistiques, sourcing, appels d'offres, négociations contractuelles OPEX/CAPEX/achats indirects et optimisation des processus",
        "Réalisation de projets de conseil",
        "Analyse et évaluation initiales des potentiels d'optimisation comme base pour la création d'offres (développement commercial)",
      ],
      activities: [
        "Analyse des catégories et des dépenses, identification des potentiels de réduction des coûts, sourcing, appels d'offres, négociations contractuelles pour les matériaux indirects, optimisation organisationnelle et des processus",
        "Création de concepts d'optimisation, planification de projets et de mesures",
        "Développement et mise en œuvre de programmes de qualification pour le personnel achats interne et externe",
        "Tchibo : optimisation de la logistique transport pour l'approvisionnement des boutiques, emballages, marketing",
        "KGW (éoliennes) : analyse et évaluation de l'organisation achats, présentation des mesures d'optimisation et de restructuration",
      ],
    },
  },

  // ─── Kloepfel ───────────────────────────────────────────────────────────────
  kloepfel: {
    de: {
      leadership: [
        "Realisierung von nachhaltigen Einsparungen durch Materialkosten- und Lieferantenoptimierung, Sourcing, Ausschreibungen, Vertragsverhandlungen von OPEX, CAPEX und indirektem Material",
        "Führung von Projektteams und Durchführung von Beratungsprojekten",
        "Initiale Analyse & Bewertung von Kostensenkungspotenzialen als Basis zur Angebotserstellung (Kundenakquise)",
      ],
      activities: [
        "Projekt- und Ergebnisplanung sowie Ergebnis-Controlling der im Projekt realisierten Einspareffekte",
        "Erstellung von internen Fortschritts- und Ergebnis-Reports sowie Management-Reports für Kunden",
        "Analyse von bestehenden Warengruppen und detaillierte Kalkulation von Kostensenkungspotenzialen",
        "Analyse von Einkaufsorganisation und Prozesse, Entwurf und Planung von Reorganisations- und Optimierungsmaßnahmen",
        "KNV (Buchgroßhandel): Optimierung Indirect Spend – 4PL-Logistik, Zeitarbeit, IT, Verpackungen, Energie, Fuhrpark",
        "AS Schwabe (Elektrotechnik): Optimierung OPEX und Indirect Spend, Sourcing International inkl. Lieferantenaudits",
        "Orsay (Textil): Optimierung Indirect Spend – Fuhrpark, Versicherungen, Büromaterial, Verpackungen",
        "Epolog (Verpackung): Optimierung OPEX und CAPEX – Konstruktionsholz, Dämmstoffe, Kartonagen",
        "Zur Rose / Doc Morris (Pharma): Optimierung Indirect Spend – Zeitarbeit, Marketing, Verpackungen",
      ],
    },
    en: {
      leadership: [
        "Realizing sustainable savings through material cost and supplier optimization, sourcing, tenders, contract negotiations for OPEX, CAPEX and indirect material",
        "Team leadership and execution of consulting projects",
        "Initial analysis and assessment of cost reduction potentials for proposal creation (business development)",
      ],
      activities: [
        "Project and results planning and controlling of savings achieved",
        "Internal progress and results reporting, management reports for clients",
        "Analysis of existing categories and detailed calculation of cost reduction potentials",
        "Analysis of procurement organization and processes, design of restructuring and optimization measures",
        "KNV (book wholesale): indirect spend optimization – 4PL logistics, temp labor, IT, packaging, energy, fleet",
        "AS Schwabe (electrical): OPEX and indirect spend optimization, international sourcing incl. supplier audits",
        "Orsay (textiles): indirect spend optimization – fleet, insurance, office supplies, packaging",
        "Epolog (packaging): OPEX and CAPEX optimization – construction timber, insulation, cardboard",
        "Zur Rose / Doc Morris (pharma): indirect spend optimization – temp labor, marketing, packaging",
      ],
    },
    fr: {
      leadership: [
        "Réalisation d'économies durables via l'optimisation des coûts matériaux et fournisseurs, sourcing, appels d'offres, négociations OPEX/CAPEX/achats indirects",
        "Direction d'équipes projet et réalisation de projets de conseil",
        "Analyse et évaluation initiales des potentiels de réduction des coûts pour la création d'offres (développement commercial)",
      ],
      activities: [
        "Planification et contrôle des projets et des économies réalisées",
        "Rapports internes d'avancement et de résultats, rapports de gestion pour les clients",
        "Analyse des catégories existantes et calcul détaillé des potentiels de réduction des coûts",
        "Analyse de l'organisation achats et des processus, conception des mesures de restructuration et d'optimisation",
        "KNV (distribution livres) : optimisation achats indirects – logistique 4PL, intérim, IT, emballages, énergie, flotte",
        "AS Schwabe (électrotechnique) : optimisation OPEX et achats indirects, sourcing international incl. audits fournisseurs",
        "Orsay (textile) : optimisation achats indirects – flotte, assurances, fournitures de bureau, emballages",
        "Epolog (emballage) : optimisation OPEX et CAPEX – bois de construction, isolants, cartons",
        "Zur Rose / Doc Morris (pharma) : optimisation achats indirects – intérim, marketing, emballages",
      ],
    },
  },

  // ─── Koettschau ─────────────────────────────────────────────────────────────
  koettschau: {
    de: {
      leadership: [
        "Führung von 19 Projektmitarbeitern über alle Kundenprojekte und Mandanten",
        "Projektleitung und -management internationaler Ausschreibungen in mandantenübergreifenden Projektteams",
      ],
      activities: [
        "Planung und Durchführung von globalen Ausschreibungen mit einem Vergabevolumen ca. 250 Mio. Euro",
        "Workshop Facilitation und Projektmanagement",
        "Angebotsbewertung und Vertragsverhandlungen",
      ],
      categories: "Indirect Spend: Industrial Packaging, Sea Freight, Laboratory Equipment, Office Supplies, Zeitarbeit, Wooden Pallets, Standard Software",
    },
    en: {
      leadership: [
        "Management of 19 project staff across all client projects and mandates",
        "Project leadership and management of international tenders in cross-client project teams",
      ],
      activities: [
        "Planning and execution of global tenders with an award volume of ~€250M",
        "Workshop facilitation and project management",
        "Bid analysis and contract negotiations",
      ],
      categories: "Indirect spend: Industrial Packaging, Sea Freight, Laboratory Equipment, Office Supplies, Temporary Labor, Wooden Pallets, Standard Software",
    },
    fr: {
      leadership: [
        "Direction de 19 collaborateurs de projet sur l'ensemble des projets et mandants clients",
        "Gestion et direction de projet pour les appels d'offres internationaux dans des équipes projet multi-mandants",
      ],
      activities: [
        "Planification et exécution d'appels d'offres mondiaux avec un volume d'attribution ~250 M€",
        "Animation d'ateliers et gestion de projet",
        "Analyse des offres et négociations contractuelles",
      ],
      categories: "Achats indirects : emballages industriels, fret maritime, équipements de laboratoire, fournitures de bureau, intérim, palettes en bois, logiciels standard",
    },
  },

  // ─── Siemens Mobility ───────────────────────────────────────────────────────
  siemens_mob: {
    de: {
      leadership: [
        "Optimierung B- und C-Material Fertigungsmaterial für Elektrogeneratoren für Windkraftanlagen",
        "Durchführung von Ausschreibungen und Optimierung der Warengruppen",
        "Bewertung Einkaufsorganisation und Erstellung Organisationsentwicklungskonzept",
      ],
      activities: [
        "Projektdesign/-planung und Projektmanagement sowie Umsetzung von Kosteneinsparung durch Ausschreibungen (e-Auctions) für drei definierte Warengruppen im B-/C-Segment",
        "Supply Chain- und Organisationsanalyse",
        "Reifegradbestimmung der Organisation und Ausarbeitung eines Maßnahmenkonzeptes inkl. Umsetzungs-Grobplanung",
      ],
      categories: "Blechteile, Verbindungselemente, Kupferhalbzeuge, Isolatoren, Spritzgussteile, Kunststoffbauteile, DIN/Normteile, Kabel",
    },
    en: {
      leadership: [
        "Optimization of B/C manufacturing materials for electric generators for wind turbines",
        "Execution of tenders and optimization of categories",
        "Assessment of procurement organization and development of organizational development concept",
      ],
      activities: [
        "Project design, planning and management; realization of cost savings through tenders (e-auctions) for three defined B/C-segment categories",
        "Supply chain and organizational analysis",
        "Maturity assessment of the organization and development of an action concept incl. rough implementation planning",
      ],
      categories: "Sheet metal parts, fasteners, copper semi-finished products, insulators, injection-molded parts, plastic components, DIN/standard parts, cables",
    },
    fr: {
      leadership: [
        "Optimisation des matériaux de fabrication B/C pour les générateurs électriques d'éoliennes",
        "Exécution des appels d'offres et optimisation des catégories",
        "Évaluation de l'organisation achats et développement d'un concept de développement organisationnel",
      ],
      activities: [
        "Conception, planification et gestion de projet ; réalisation d'économies via des appels d'offres (e-auctions) pour trois catégories B/C définies",
        "Analyse de la chaîne logistique et de l'organisation",
        "Évaluation de la maturité de l'organisation et élaboration d'un concept de mesures incl. planification grossière de la mise en œuvre",
      ],
      categories: "Pièces en tôle, fixations, demi-produits en cuivre, isolateurs, pièces moulées par injection, composants plastiques, pièces DIN/standard, câbles",
    },
  },

  // ─── Agrikomp ───────────────────────────────────────────────────────────────
  agrikomp: {
    de: {
      leadership: [
        "Führung von 69 Mitarbeitern in Customer Service, Strategischer und operativer Einkauf, Lager und Logistik, SCM",
        "Transformation und Reengineering der Gesamtorganisation in den Bereichen Supply Chain, Logistik, Warehouse Management, Innendienst, Ersatzteile- und Serviceversorgung",
        "Management Einkauf und Beschaffung OPEX, CAPEX",
        "Optimierung Lager und Logistik – Lagerstruktur und -prozesse, Lagerinfrastruktur",
      ],
      activities: [
        "Aufbau, Reorganisation und Optimierung von Strukturen und Prozessen der Supply Chain über die Funktionen strategischer und operativer Einkauf, internes Key Account Management und Auftragsabwicklung, Warehouse Management, Ersatzteil- und Serviceversorgung",
        "Integration und Abstimmung der SCM Strukturen und Prozesse in das strategisch-konzeptionelle Projekt 'Gesamtunternehmens-Optimierung der agriKomp Gruppe'",
        "Auffangen des Führungsvakuums ausgeschiedener Führungskräfte bis zur Findung und Einarbeitung eines geeigneten Supply Chain Managers in Festanstellung",
        "Aufsetzen und Durchführen verschiedener Optimierungs- und Teilprojekte innerhalb der Supply Chain mit dem Ziel der Verbesserung der Materialversorgung und -verfügbarkeit, der Liquidität, der Bestände",
        "Aufbau und Implementierung eines Warengruppen- und Lieferantenmanagements",
        "Bestandsreduzierung des Net Working Capital sowie Reduzierung der Prozessdurchlaufzeiten im Lager",
        "Optimierung der Kundenzufriedenheit durch Sicherstellung der Materialverfügbarkeit unter Kosten-, Qualitäts- und Termingesichtspunkten",
        "Aufsetzen und Implementierung eines professionellen Forecasts (S&OP) und eines geeigneten Bedarfsermittlungs- und Dispositionsverfahrens",
        "Aufbau eines strategischen Einkaufs- und Supply Chain Controllings; Senkung der Material- und Beschaffungskosten",
        "Implementierung und Etablierung S&OP, Forecasting; Einführung von Prozess- und Erfolgskennzahlen in Einkauf und SCM",
      ],
      categories: "Fertigungsmaterial Motorenbau, Komponenten für Biogasanlagen: Grundmotoren, Motorenkomponenten, Getriebe, Wärmetauscher, Abgasanlagen und -komponenten, metallgebundene Konstruktionselemente, Schaltschränke, Container, Isolationsmaterial, Bauleistungen, Baumaterialien, DIN/Normteile, Lagerausstattung, Regalsysteme, Flurförderanlagen",
    },
    en: {
      leadership: [
        "Management of 69 staff across customer service, strategic and operational procurement, warehouse, logistics and SCM",
        "Transformation and reengineering of the entire organization in supply chain, logistics, warehouse management, internal sales, spare parts and service supply",
        "Management of procurement and purchasing for OPEX and CAPEX",
        "Optimization of warehouse and logistics – warehouse structure, processes and infrastructure",
      ],
      activities: [
        "Build-up, reorganization and optimization of supply chain structures and processes across strategic and operational procurement, internal key account management, order fulfillment, warehouse management, spare parts and service supply",
        "Integration and alignment of SCM structures and processes with the strategic project 'Overall Company Optimization of the agriKomp Group'",
        "Bridging the management vacuum left by departing leaders until a suitable permanent SCM manager was found and onboarded",
        "Setup and execution of various optimization sub-projects within the supply chain to improve material availability, liquidity and inventory levels",
        "Build-up and implementation of category and supplier management",
        "Net working capital reduction and reduction of process lead times in the warehouse",
        "Customer satisfaction optimization through ensuring material availability with respect to cost, quality and delivery",
        "Setup and implementation of professional forecasting (S&OP) and a suitable demand planning and scheduling process",
        "Build-up of strategic procurement and supply chain controlling; reduction of material and procurement costs",
        "Implementation and establishment of S&OP and forecasting; introduction of process and performance KPIs in procurement and SCM",
      ],
      categories: "Manufacturing materials for engine production, components for biogas plants: base engines, engine components, gearboxes, heat exchangers, exhaust systems and components, metal-bound structural elements, control cabinets, containers, insulation material, construction services, building materials, DIN/standard parts, warehouse equipment, racking systems, industrial trucks",
    },
    fr: {
      leadership: [
        "Direction de 69 collaborateurs dans le service client, les achats stratégiques et opérationnels, l'entrepôt, la logistique et le SCM",
        "Transformation et reengineering de l'organisation globale dans les domaines supply chain, logistique, warehouse management, service interne, pièces détachées et service après-vente",
        "Management des achats et de l'approvisionnement OPEX et CAPEX",
        "Optimisation de l'entrepôt et de la logistique – structure, processus et infrastructure d'entreposage",
      ],
      activities: [
        "Construction, réorganisation et optimisation des structures et processus de la supply chain sur les fonctions achats stratégiques et opérationnels, key account management interne, traitement des commandes, warehouse management, pièces détachées et service",
        "Intégration et alignement des structures et processus SCM avec le projet stratégique 'Optimisation globale de l'entreprise du groupe agriKomp'",
        "Gestion du vide managérial laissé par les cadres partants jusqu'au recrutement et à l'intégration d'un Supply Chain Manager en CDI",
        "Mise en place et exécution de divers sous-projets d'optimisation au sein de la supply chain pour améliorer la disponibilité des matériaux, la liquidité et les niveaux de stock",
        "Mise en place et implémentation de la gestion des catégories et des fournisseurs",
        "Réduction du besoin en fonds de roulement et des délais de traitement en entrepôt",
        "Optimisation de la satisfaction client en assurant la disponibilité des matériaux en termes de coût, qualité et délais",
        "Mise en place et implémentation d'un forecast professionnel (S&OP) et d'un processus de planification des besoins et d'ordonnancement",
        "Construction d'un contrôle achats et SCM stratégique ; réduction des coûts matériaux et d'approvisionnement",
        "Implémentation et établissement du S&OP et du forecasting ; introduction d'indicateurs de processus et de performance dans les achats et le SCM",
      ],
      categories: "Matériaux de fabrication pour la construction de moteurs, composants pour installations biogaz : moteurs de base, composants moteurs, engrenages, échangeurs de chaleur, systèmes d'échappement et composants, éléments de construction métalliques, armoires électriques, conteneurs, matériaux d'isolation, services de construction, matériaux de construction, pièces DIN/standard, équipements d'entrepôt, systèmes de rayonnage, chariots industriels",
    },
  },

  // ─── Gardinia ───────────────────────────────────────────────────────────────
  gardinia: {
    de: {
      leadership: [
        "Führung von 15 Mitarbeitern SCM (Deutschland, Polen, China)",
        "Sicherstellung Materialdisposition und Warenwirtschaft",
        "Vorbereitung und Durchführung von S&OP Regelmeetings",
      ],
      activities: [
        "Steuerung und Controlling aller dispositionsrelevanten Aktivitäten von Fertigungsmaterial/Handelswaren sowie Logistikdienstleistungen",
        "Anpassung und Steuerung der Dispositionsparameter",
        "Integration rollierender Forecasts, Bestandsplanungen sowie Sicherstellung des Ordermanagements",
        "Vorantreiben der Implementierung, Optimierung und Nutzung des SCM Bestands- und Bedarfsplanungssystems Add*One/SAP MM",
        "Identifikation von Handlungsfeldern durch kontinuierliche Weiterentwicklung des Qualitäts- und Effizienzmanagements in den verschiedenen Supply Chains der Länder",
        "Optimierung der Lagerauslastung und Materialverfügbarkeit unter besonderer Berücksichtigung von Vertriebs- und Kundenvorgaben und Verträgen",
        "Optimierung Wiederbeschaffungszeiten und Beständen vor dem Hintergrund von aktuellen Kriseneinflüssen (Corona, Suezkanalkrise, Rohstoff- und Transportverknappung)",
        "Erstellung und Weiterentwicklung bestehender und benötigter Reports und Analysen zur optimalen Steuerung von Material und Logistik",
      ],
      categories: "Aluminium-, Kunststoff-, Metallkomponenten, Textilien, Transportdienstleistungen (Seefrachten, Straßentransporte)",
    },
    en: {
      leadership: [
        "Management of 15 SCM staff (Germany, Poland, China)",
        "Ensuring material scheduling and inventory management",
        "Preparation and execution of regular S&OP meetings",
      ],
      activities: [
        "Steering and controlling of all scheduling-relevant activities for manufacturing materials/trade goods and logistics services",
        "Adjustment and management of scheduling parameters",
        "Integration of rolling forecasts, inventory planning and ensuring order management",
        "Driving implementation, optimization and use of SCM inventory and demand planning system Add*One/SAP MM",
        "Identification of action areas through continuous development of quality and efficiency management across country supply chains",
        "Optimization of warehouse utilization and material availability with special consideration of sales and customer requirements and contracts",
        "Optimization of replenishment times and inventories in view of crisis impacts (COVID, Suez Canal crisis, raw material and transport shortages)",
        "Creation and further development of reports and analyses for optimal material and logistics management",
      ],
      categories: "Aluminum, plastic and metal components, textiles, transport services (sea freight, road transport)",
    },
    fr: {
      leadership: [
        "Direction de 15 collaborateurs SCM (Allemagne, Pologne, Chine)",
        "Assurance de l'ordonnancement des matériaux et de la gestion des stocks",
        "Préparation et conduite des réunions S&OP régulières",
      ],
      activities: [
        "Pilotage et contrôle de toutes les activités d'ordonnancement pour les matériaux de fabrication/marchandises commerciales et les services logistiques",
        "Ajustement et pilotage des paramètres d'ordonnancement",
        "Intégration des forecasts glissants, des planifications de stocks et assurance de la gestion des commandes",
        "Promotion de l'implémentation, de l'optimisation et de l'utilisation du système de planification des stocks et des besoins SCM Add*One/SAP MM",
        "Identification des axes d'action par le développement continu du management de la qualité et de l'efficacité dans les supply chains des différents pays",
        "Optimisation de l'utilisation de l'entrepôt et de la disponibilité des matériaux en tenant compte des exigences commerciales et clients et des contrats",
        "Optimisation des délais de réapprovisionnement et des stocks en regard des impacts de crise (COVID, crise du canal de Suez, pénuries de matières premières et de transport)",
        "Création et développement de rapports et analyses pour la gestion optimale des matériaux et de la logistique",
      ],
      categories: "Composants aluminium, plastique et métal, textiles, services de transport (fret maritime, transport routier)",
    },
  },

  // ─── AMSilk ─────────────────────────────────────────────────────────────────
  amsilk: {
    de: {
      leadership: [
        "Führung 2 Mitarbeiter Einkauf/SCM",
        "Serialisierung der Produktion, Aufbau der Beschaffungs- und Logistikorganisation (Mitarbeiter & Prozesse)",
        "Vertragsverhandlungen CMO's (Lohnhersteller)",
        "Etablierung Materialmanagement und Beschaffungsprozesse",
      ],
      activities: [
        "Unterstützung der GF bei der Business- und Wachstumsstrategie",
        "Vorbereitung und Durchführung von Vertragsverhandlungen und -abschlüssen",
        "Aufbau eines nachhaltigen und effektiven SCM",
        "Entwicklung Prozesslandschaft und Geschäftsprozesse nach ISO 9001:2015",
        "Entwicklung von Prozessen und Organisationsstrukturen (SCM, Bedarfsplanung/Forecast, Sourcing-Strategien, Warengruppen- und Lieferantenmanagement, Lagerwesen, Beschaffung, Materialmanagement, Logistik)",
        "Vorbereitung zur Auswahl und Implementierung eines skalierbaren ERP Systems mit Fokus auf die Prozessindustrie",
        "Entwicklung von Methoden und Tools zum Lieferantenmanagement, der Beschaffungs-, Anlagenverwaltungs-, Lagerhaltungs- und Logistikprozessen",
        "Sicherstellung der Umsetzung von Bestellungen, Materialtransporten und Materiallagerung, Materialverfügbarkeit, Disposition",
      ],
      categories: "Lohnfertigung International (CMO's), Chemikalien, Labor Equipment, Transportdienstleistung, Logistikdienstleistungen, IT Dienstleistungen und -systeme (ERP & Anwendungen), IT Equipment",
    },
    en: {
      leadership: [
        "Management of 2 procurement/SCM staff",
        "Production serialization, build-up of procurement and logistics organization (staff & processes)",
        "Contract negotiations with CMOs (contract manufacturers)",
        "Establishment of material management and procurement processes",
      ],
      activities: [
        "Support of executive management in business and growth strategy",
        "Preparation and execution of contract negotiations and closings",
        "Build-up of a sustainable and effective SCM organization",
        "Development of process landscape and business processes per ISO 9001:2015",
        "Development of processes and organizational structures (SCM, demand planning/forecast, sourcing strategies, category and supplier management, warehousing, procurement, material management, logistics)",
        "Preparation for selection and implementation of a scalable ERP system focused on the process industry",
        "Development of methods and tools for supplier management, procurement, asset management, warehousing and logistics processes",
        "Ensuring execution of orders, material transport and storage, material availability and scheduling",
      ],
      categories: "International contract manufacturing (CMOs), chemicals, laboratory equipment, transport services, logistics services, IT services and systems (ERP & applications), IT equipment",
    },
    fr: {
      leadership: [
        "Direction de 2 collaborateurs achats/SCM",
        "Sérialisation de la production, construction de l'organisation achats et logistique (collaborateurs & processus)",
        "Négociations contractuelles avec les CMOs (fabricants sous contrat)",
        "Établissement des processus de gestion des matériaux et des achats",
      ],
      activities: [
        "Soutien de la direction générale dans la stratégie commerciale et de croissance",
        "Préparation et conduite des négociations et conclusions contractuelles",
        "Construction d'un SCM durable et efficace",
        "Développement du paysage de processus et des processus métier selon ISO 9001:2015",
        "Développement de processus et de structures organisationnelles (SCM, planification des besoins/forecast, stratégies sourcing, gestion des catégories et des fournisseurs, entrepôt, achats, gestion des matériaux, logistique)",
        "Préparation pour la sélection et l'implémentation d'un système ERP évolutif axé sur l'industrie de process",
        "Développement de méthodes et d'outils pour la gestion des fournisseurs, les achats, la gestion des actifs, l'entreposage et les processus logistiques",
        "Assurance de l'exécution des commandes, du transport et du stockage des matériaux, de la disponibilité des matériaux et de l'ordonnancement",
      ],
      categories: "Fabrication sous contrat internationale (CMOs), produits chimiques, équipements de laboratoire, services de transport, services logistiques, services et systèmes IT (ERP & applications), équipements IT",
    },
  },

  // ─── OmniVision ─────────────────────────────────────────────────────────────
  omnivision: {
    de: {
      leadership: [
        "Führung 5 Mitarbeiter Einkauf und Materialdisposition, Operativer Einkauf, Strategischer Einkauf und Materialwirtschaft",
        "Restrukturierung der Beschaffungsorganisation",
        "Sicherstellung Disposition und Bestellungsabwicklung, Engpassmanagement und Lieferantensteuerung",
        "Aufbau S&OP Prozess und Integration mit Beschaffung/Einkauf",
        "Optimierung MS Dynamics FO und Einführung Rechnungsabwicklungs-Workflowsystem Flowers",
      ],
      activities: [
        "Fachliche Beratung bezüglich der Beschaffung aller Produkte (direkter EK) und des Bestandsmanagements",
        "Einführung und Management von S&OP (kritische Bestände Stock Out und Vernichtung sowie Abgleich des Bedarfs mit Marketing und Sales)",
        "Erstellung Management Reports und KPIs",
        "Optimierung und Definition der Planungs- und Dispositionsparameter (Safety Stock, Shelflife, Lead Times, MOQs, Vertriebslaufzeiten)",
        "Analyse und Bewertung der IST-Situation: Erfassung aller Prozesse, Aufgaben und Tätigkeiten der MA, Strukturen, Meetings, Schnittstellen",
        "Reorganisationskonzept und Umsetzungsplanung der SCM Organisation sowie der Schnittstellen zu Lieferanten und internen Abteilungen",
        "Fachliche Beratung der Teams zur Optimierung und Nutzung des ERP Systems MS Dynamics FO",
        "Steuerung aller operativen Aktivitäten des SCM Teams (Bedarfsplanung bis zur Abrechnung der Bestellungen)",
      ],
      categories: "Lohnfertigung International (CMO's), Hilfsstoffe API's/Wirkstoffe, Logistikdienstleistungen/3PL, Primär- und Sekundärpackmittel",
    },
    en: {
      leadership: [
        "Management of 5 procurement and material scheduling staff, operational procurement, strategic procurement and materials management",
        "Restructuring of the procurement organization",
        "Ensuring scheduling and order processing, bottleneck management and supplier control",
        "Build-up of S&OP process and integration with procurement",
        "Optimization of MS Dynamics FO and introduction of invoice processing workflow system Flowers",
      ],
      activities: [
        "Expert advisory on procurement of all products (direct purchasing) and inventory management",
        "Introduction and management of S&OP (critical stock-out and destruction scenarios, aligning demand with marketing and sales)",
        "Creation of management reports and KPIs",
        "Optimization and definition of planning and scheduling parameters (safety stock, shelf life, lead times, MOQs, sales lead times)",
        "As-is analysis: documentation of all processes, tasks, activities, structures, meetings and interfaces",
        "Reorganization concept and implementation planning for SCM organization and interfaces to suppliers and internal departments",
        "Expert advisory to teams on optimization and use of ERP system MS Dynamics FO",
        "Steering of all operational SCM team activities (demand planning through to invoice processing)",
      ],
      categories: "International contract manufacturing (CMOs), auxiliary materials APIs/active ingredients, logistics services/3PL, primary and secondary packaging",
    },
    fr: {
      leadership: [
        "Direction de 5 collaborateurs achats et ordonnancement, achats opérationnels, achats stratégiques et gestion des matériaux",
        "Restructuration de l'organisation achats",
        "Assurance de l'ordonnancement et du traitement des commandes, gestion des goulets d'étranglement et pilotage des fournisseurs",
        "Construction du processus S&OP et intégration avec les achats",
        "Optimisation de MS Dynamics FO et introduction du système de workflow de traitement des factures Flowers",
      ],
      activities: [
        "Conseil expert sur l'approvisionnement de tous les produits (achat direct) et la gestion des stocks",
        "Introduction et management du S&OP (scénarios critiques de rupture de stock et de destruction, alignement des besoins avec le marketing et les ventes)",
        "Création de rapports de gestion et de KPIs",
        "Optimisation et définition des paramètres de planification et d'ordonnancement (stock de sécurité, durée de vie, délais, MOQs, délais de vente)",
        "Analyse as-is : documentation de tous les processus, tâches, activités, structures, réunions et interfaces",
        "Concept de réorganisation et planification de la mise en œuvre de l'organisation SCM et des interfaces avec les fournisseurs et les départements internes",
        "Conseil expert aux équipes sur l'optimisation et l'utilisation du système ERP MS Dynamics FO",
        "Pilotage de toutes les activités opérationnelles de l'équipe SCM (planification des besoins jusqu'au traitement des factures)",
      ],
      categories: "Fabrication sous contrat internationale (CMOs), matières auxiliaires API/principes actifs, services logistiques/3PL, emballages primaires et secondaires",
    },
  },

  // ─── Borco ──────────────────────────────────────────────────────────────────
  borco: {
    de: {
      leadership: [
        "Konzeptentwicklung und Einführung S&OP Prozess",
        "Bereitstellung und S&OP Framework inkl. Daten- und Informationsstrukturen für alle Produktions- und Handelsmaterialien",
        "Implementierung und Nachoptimierung S&OP Prozess mit den Fachabteilungen",
        "Projektplanung und -konzeption zur Umsetzung der Einkaufsorganisation, Warengruppenrestrukturierung, sowie Optimierung der Schnittstelle Einkauf – Produktion",
      ],
      activities: [
        "Ist-Analyse der SCM (Prozesse, Organisation, Datenstrukturen und Informations-/Werteflüsse), insbesondere Sales, Produktionsplanung und Einkauf, Beschaffung und Materialdisposition",
        "Entwicklung von Soll-Prozessen und Organisation bzgl. S&OP und Strategischer Einkauf/Beschaffung",
        "Ableitung von kurz-, mittel- und langfristigen Optimierungsmaßnahmen sowie Bereitstellung Projektmanagement Framework zur Umsetzung",
        "Durchführung und Etablierung des S&OP Regelprozesses sowie Unterstützung und Begleitung von S&OP Regelterminen",
        "Suche und Empfehlung geeigneter Tools und Add-On Systeme bzgl. Demand Planning und PPS",
        "Laufendes Coaching Mitarbeiter Einkauf (Methoden & Tools des strategischen Einkaufs)",
      ],
      categories: "Glas, Alkohol und Aromastoffe, Druckereileistungen, Label, Kork- und Kunststoffverschlüsse",
    },
    en: {
      leadership: [
        "Concept development and introduction of S&OP process",
        "Provision of S&OP framework incl. data and information structures for all production and trade materials",
        "Implementation and post-optimization of S&OP process with specialist departments",
        "Project planning and concept for implementation of procurement organization, category restructuring and optimization of procurement-production interface",
      ],
      activities: [
        "As-is analysis of SCM (processes, organization, data structures, information/value flows), particularly sales, production planning and procurement, purchasing and material scheduling",
        "Development of to-be processes and organization for S&OP and strategic procurement",
        "Derivation of short-, medium- and long-term optimization measures and provision of project management framework for implementation",
        "Execution and establishment of regular S&OP process and support of S&OP meetings",
        "Search and recommendation of suitable tools and add-on systems for demand planning and PPS",
        "Ongoing coaching of procurement staff (methods & tools of strategic procurement)",
      ],
      categories: "Glass, alcohol and flavoring agents, printing services, labels, cork and plastic closures",
    },
    fr: {
      leadership: [
        "Développement du concept et introduction du processus S&OP",
        "Fourniture du framework S&OP incl. structures de données et d'informations pour tous les matériaux de production et de négoce",
        "Implémentation et post-optimisation du processus S&OP avec les départements spécialisés",
        "Planification de projet et concept pour la mise en œuvre de l'organisation achats, la restructuration des catégories et l'optimisation de l'interface achats-production",
      ],
      activities: [
        "Analyse as-is du SCM (processus, organisation, structures de données, flux d'informations/de valeurs), notamment ventes, planification de production, achats et ordonnancement",
        "Développement des processus et de l'organisation cibles pour le S&OP et les achats stratégiques",
        "Dérivation de mesures d'optimisation à court, moyen et long terme et fourniture d'un framework de gestion de projet pour la mise en œuvre",
        "Exécution et établissement du processus S&OP régulier et accompagnement des réunions S&OP",
        "Recherche et recommandation d'outils et de systèmes add-on adaptés pour la planification de la demande et le PPS",
        "Coaching continu des collaborateurs achats (méthodes & outils des achats stratégiques)",
      ],
      categories: "Verre, alcool et arômes, services d'impression, étiquettes, bouchons en liège et en plastique",
    },
  },

  // ─── Phoenix Contact ─────────────────────────────────────────────────────────
  phoenix: {
    de: {
      leadership: [
        "Führung und Aufbau der Abteilungen Operativer Einkauf/Disposition & Produktionsplanung/-steuerung (18 FTE)",
        "Operative Steuerung und Optimierung Materialversorgung (Beschaffung/Materialwirtschaft/Bestandsmanagement) sowie Fertigungsplanung und -steuerung",
        "Optimierung der Beschaffungs- und Produktionsplanungsprozesse für die Serienproduktion",
        "Produktivsetzung der Prozesse in SAP S/4HANA im Rahmen der IT-Systemumstellung und Taskforce",
      ],
      activities: [
        "Durchführung und Steuerung der Prozesse Bedarfsermittlung, Produktverfügbarkeit, Materialallokation, Eskalation, Engpasssteuerung und kapazitatives Lieferantenmanagement (Teilejagd/Expediting)",
        "Optimierung Dispositionsparameter für Bedarfs-/Bestellplanung auf Basis von S&OP/Forecast und Produktionskapazitäten",
        "Sicherstellung nachhaltiger Bedarfsdeckung für die Produktion",
        "Steuerung des Engpassmanagements mit den Lieferanten",
        "Sicherstellung einer rüstoptimierten Produktionsplanung und -steuerung für 12 Anlagen in den Werken Deutschland und Polen nach Lean Management Prinzipien",
        "Optimierung und Durchführung der kurz- und mittelfristigen Produktionsplanung in Abstimmung mit Kundenaufträgen (Customer Service) und Prognosedaten des Sales (Forecast) sowie langfristige Kapazitätsplanung",
        "Bereitstellung und Abstimmung der Materialbedarfe für die Produktion mit der Materialdisposition (Fertigungssteuerung) zur Erstellung der Fertigungsaufträge",
        "Sicherstellung von Produktionsplänen und deren Umsetzung",
        "Steuerung und Freigabe der Materialversorgung unter Gesichtspunkten der Bestandsoptimierung",
        "Projektplanung und Umsetzung zur nachhaltigen Reduktion von Überbeständen und Slow-/No-Movern",
        "Durchführung SAP S/4HANA User Acceptance Tests und Nachoptimierung nach Produktivstart im Rahmen der Task Force Initiativen",
        "Erstellung von Optimierungsstrategien, Umsetzungsplänen, Management- und Kundenreports",
      ],
      categories: "PCBA – SMD/SMT Elektronikbauteile, Spritzgussteile, Kupferkabel, Verbindungselemente, Kupfer-/Stahlbauteile",
    },
    en: {
      leadership: [
        "Build-up and management of operational procurement/scheduling and production planning/control departments (18 FTE)",
        "Operational steering and optimization of material supply (procurement/materials management/inventory management) and production planning and control",
        "Optimization of procurement and production planning processes for series production",
        "Go-live of processes in SAP S/4HANA as part of IT system migration and taskforce",
      ],
      activities: [
        "Execution and steering of demand determination, product availability, material allocation, escalation, bottleneck management and capacity-based supplier management (expediting)",
        "Optimization of scheduling parameters for demand/order planning based on S&OP/forecast and production capacities",
        "Ensuring sustainable demand fulfillment for production",
        "Steering bottleneck management with suppliers",
        "Ensuring setup-optimized production planning and control for 12 plants in Germany and Poland per lean management principles",
        "Short- and medium-term production planning in coordination with customer orders (customer service) and sales forecast data, plus long-term capacity planning",
        "Provision and alignment of material requirements for production with material scheduling (production control) for work order creation",
        "Ensuring production plans and their execution",
        "Steering and release of material supply with focus on inventory optimization",
        "Project planning and execution for sustainable reduction of excess inventory and slow/no-movers",
        "SAP S/4HANA user acceptance testing and post-optimization after go-live as part of task force initiatives",
        "Creation of optimization strategies, implementation plans, management and customer reports",
      ],
      categories: "PCBA – SMD/SMT electronic components, injection-molded parts, copper cables, fasteners, copper/steel parts",
    },
    fr: {
      leadership: [
        "Construction et direction des départements achats opérationnels/ordonnancement et planification/pilotage de production (18 ETP)",
        "Pilotage opérationnel et optimisation de l'approvisionnement en matériaux (achats/gestion des matériaux/gestion des stocks) et de la planification et du pilotage de production",
        "Optimisation des processus d'achats et de planification de production pour la production en série",
        "Mise en production des processus dans SAP S/4HANA dans le cadre de la migration du système IT et de la taskforce",
      ],
      activities: [
        "Exécution et pilotage des processus de détermination des besoins, disponibilité des produits, allocation des matériaux, escalade, gestion des goulets et gestion des fournisseurs basée sur les capacités (expéditing)",
        "Optimisation des paramètres d'ordonnancement pour la planification des besoins/commandes sur la base du S&OP/forecast et des capacités de production",
        "Assurance d'une couverture des besoins durable pour la production",
        "Pilotage de la gestion des goulets avec les fournisseurs",
        "Assurance d'une planification et d'un pilotage de production optimisés en termes de réglages pour 12 sites en Allemagne et en Pologne selon les principes du lean management",
        "Planification de production à court et moyen terme en coordination avec les commandes clients et les données de forecast des ventes, ainsi que planification des capacités à long terme",
        "Fourniture et alignement des besoins en matériaux pour la production avec l'ordonnancement (pilotage de la fabrication) pour la création des ordres de fabrication",
        "Assurance des plans de production et de leur exécution",
        "Pilotage et libération de l'approvisionnement en matériaux dans une optique d'optimisation des stocks",
        "Planification et mise en œuvre pour la réduction durable des surstocks et des articles à mouvement lent/nul",
        "Tests de réception utilisateur SAP S/4HANA et post-optimisation après le démarrage dans le cadre des initiatives taskforce",
        "Création de stratégies d'optimisation, de plans de mise en œuvre, de rapports de gestion et de rapports clients",
      ],
      categories: "PCBA – composants électroniques SMD/SMT, pièces moulées par injection, câbles en cuivre, fixations, pièces en cuivre/acier",
    },
  },

  // ─── Deutsche Glasfaser ──────────────────────────────────────────────────────
  glasfaser: {
    de: {
      leadership: [
        "Prozessmanagement – Analyse, Design und Umsetzung",
        "Strategieentwicklung Logistikkonzepte und Organisationsentwicklung SCM",
      ],
      activities: [
        "Aufnahme und Modellierung der Business- und IT Ist-Prozesse (SAP R/3) für die aktuelle Netzwerktechnologie 'Aktive Netze' im operativen und strategischen Einkauf, Supply Chain/Logistik",
        "Entwurf und Definition der Business- und IT Soll-Prozesse (SAP, Coupa, ServiceNow) für die Transformation in die neue Netzwerktechnologie 'Passive Netze'",
        "Analyse, Bewertung und Beratung der bisherigen Aktivitäten und Ergebnisse (Ausschreibungen, Sourcing Strategie, Verträge, Angebotsbewertung)",
        "Strategieentwicklung eines umfassenden Logistikkonzepts zur Materialversorgung der Kundenprojekte (Tiefbau, Netzausbau und 3PL/4PL Partner)",
        "Vorbereitung, Durchführung und Aufbereitung von Workshops und Daten-/Informationsanalysen",
        "Entwicklung Business Case als Entscheidungsvorlage für die Umsetzung des Logistikkonzepts",
      ],
      categories: "Aktive und Passive IT-Netzwerkkomponenten, Glasfaserkabel, Metallgehäuse/Schaltschränke, Kunststoff-Verbindungselemente, Bauleistungen",
    },
    en: {
      leadership: [
        "Process management – analysis, design and implementation",
        "Logistics concept strategy development and SCM organizational development",
      ],
      activities: [
        "Capture and modeling of as-is business and IT processes (SAP R/3) for current network technology 'Active Networks' in operational and strategic procurement, supply chain/logistics",
        "Design and definition of to-be business and IT processes (SAP, Coupa, ServiceNow) for the transformation to new network technology 'Passive Networks'",
        "Analysis, assessment and advisory on existing activities and results (tenders, sourcing strategy, contracts, bid evaluation)",
        "Strategy development of a comprehensive logistics concept for material supply of customer projects (civil engineering, network expansion and 3PL/4PL partners)",
        "Preparation, execution and documentation of workshops and data/information analyses",
        "Development of business case as decision document for implementation of the logistics concept",
      ],
      categories: "Active and passive IT network components, fiber optic cables, metal housings/switch cabinets, plastic connectors, construction services",
    },
    fr: {
      leadership: [
        "Management des processus – analyse, conception et mise en œuvre",
        "Développement de la stratégie des concepts logistiques et développement organisationnel SCM",
      ],
      activities: [
        "Capture et modélisation des processus métier et IT as-is (SAP R/3) pour la technologie réseau actuelle 'Réseaux actifs' dans les achats opérationnels et stratégiques, supply chain/logistique",
        "Conception et définition des processus métier et IT cibles (SAP, Coupa, ServiceNow) pour la transformation vers la nouvelle technologie réseau 'Réseaux passifs'",
        "Analyse, évaluation et conseil sur les activités et résultats existants (appels d'offres, stratégie sourcing, contrats, évaluation des offres)",
        "Développement d'un concept logistique global pour l'approvisionnement en matériaux des projets clients (génie civil, déploiement réseau et partenaires 3PL/4PL)",
        "Préparation, exécution et documentation d'ateliers et d'analyses de données/informations",
        "Développement du business case comme document de décision pour la mise en œuvre du concept logistique",
      ],
      categories: "Composants réseau IT actifs et passifs, câbles à fibre optique, boîtiers métalliques/armoires électriques, connecteurs plastiques, services de construction",
    },
  },

  // ─── Auto-Kabel ──────────────────────────────────────────────────────────────
  autokabel: {
    de: {
      leadership: [
        "Leitung des Unternehmensbereichs Einkauf, SCM und Logistik (14 FTE) im Headquarter sowie fachliche Verantwortung für die Materialdisposition in den globalen Werken/Niederlassungen",
        "Sicherstellung Materialbeschaffung und Aufrechterhaltung der Versorgungsprozesse im Rahmen der Insolvenzverwaltung und der hierfür geschaffenen Task Force",
        "Kommunikation und Verhandlungsführung mit den Lieferanten im Rahmen der Insolvenzverwaltung",
      ],
      activities: [
        "Steuerung und Sicherstellung des Cash-Flow Managements über alle Werke bezüglich direkten Materials und produktionsbezogenem indirektem Material und Investitionen (Anlagen, Werkzeuge)",
        "Optimierung ausgewählter, kritischer Warengruppen zur Sicherstellung benötigter Kapazitäten auf Lieferantenseite (Rohstoffe und Lohnbearbeitung)",
        "Aufbau von Informationsstrukturen zum Management von Bestellungen, Beständen und Bedarfen im Rahmen des Cash Managements mit dem Fokus Metallkonten",
        "Initiierung und Leitung von Ausschreibungen (Rohstoffe und Komponenten)",
        "Supplier Relation Management und Communication",
        "Engpass- und Krisenmanagement",
        "Restrukturierung von fehlenden und/oder unzureichenden Planungs- und Steuerungsprozessen mit Fokus auf die Materialbedarfsplanung (Infor Xpert)",
      ],
      categories: "Kupfer, Messing, Stahl, Aluminium, Zinn, Feinzink, Granulate, Lohnbearbeitung Metalle, Kabel, diverse Verbindungskomponenten",
    },
    en: {
      leadership: [
        "Management of procurement, SCM and logistics (14 FTE) at HQ plus functional responsibility for material scheduling in global plants/branches",
        "Ensuring material procurement and maintaining supply processes in the context of insolvency administration and the task force created for this purpose",
        "Communication and negotiation with suppliers in the context of insolvency administration",
      ],
      activities: [
        "Steering and ensuring cash flow management across all plants for direct material and production-related indirect material and investments (equipment, tools)",
        "Optimization of selected critical categories to secure required supplier capacities (raw materials and contract manufacturing)",
        "Build-up of information structures to manage orders, inventories and demand within cash management, with focus on metal accounts",
        "Initiation and management of tenders (raw materials and components)",
        "Supplier relation management and communication",
        "Bottleneck and crisis management",
        "Restructuring of missing and/or inadequate planning and control processes with focus on material requirements planning (Infor Xpert)",
      ],
      categories: "Copper, brass, steel, aluminum, tin, fine zinc, granulates, metal contract manufacturing, cables, various connectors",
    },
    fr: {
      leadership: [
        "Direction du département achats, SCM et logistique (14 ETP) au siège ainsi que responsabilité fonctionnelle pour l'ordonnancement des matériaux dans les usines/filiales mondiales",
        "Assurance de l'approvisionnement en matériaux et maintien des processus d'approvisionnement dans le cadre de l'administration judiciaire et de la task force créée à cet effet",
        "Communication et conduite des négociations avec les fournisseurs dans le cadre de l'administration judiciaire",
      ],
      activities: [
        "Pilotage et assurance de la gestion du cash-flow dans toutes les usines pour les matériaux directs et les matériaux indirects liés à la production et les investissements (équipements, outils)",
        "Optimisation des catégories critiques sélectionnées pour sécuriser les capacités fournisseurs requises (matières premières et fabrication sous contrat)",
        "Construction de structures d'information pour la gestion des commandes, stocks et besoins dans le cadre de la gestion du cash, avec focus sur les comptes métaux",
        "Initiation et direction des appels d'offres (matières premières et composants)",
        "Gestion des relations fournisseurs et communication",
        "Gestion des goulets d'étranglement et de crise",
        "Restructuration des processus de planification et de pilotage manquants ou insuffisants avec focus sur la planification des besoins en matériaux (Infor Xpert)",
      ],
      categories: "Cuivre, laiton, acier, aluminium, étain, zinc fin, granulés, fabrication sous contrat métaux, câbles, divers connecteurs",
    },
  },

  // ─── Sebapharma ──────────────────────────────────────────────────────────────
  sebapharma: {
    de: {
      leadership: [
        "Leitung des Bereiches Einkauf und Materialdisposition für die Werke Norderstedt (ehemals Dankwardt) und Pfalzfeldt sowie für 27 CMO's (Beistellung Lohnhersteller)",
        "Management diverser Sonderprojekte SCM und Beschaffungsprozesse und Logistik",
      ],
      activities: [
        "Steuerung und Sicherstellung der Umsetzung der bedarfsgerechten Planung und Bereitstellung von Rohstoffen, Primär- und Sekundärpackmitteln, Logistikmaterialien und Betriebsmittel für die Werke",
        "Optimierung der Prozesse und Materialien für die Bulk-Herstellung und die Logistik",
        "Warengruppenoptimierung und Entwicklung Sourcing und Supply Strategie für Verbrauchs- und Logistikmaterial",
        "Unterstützung der Leitung bei der Fertigungsplanung und -steuerung",
        "Optimierung der Systeme (proAlpha und Blending): Stammdaten, insbesondere der Dispo- und Logistik-Parameter",
        "Prozess-Management entlang der Supply-Chain: Packmittel-Planung und Bereitstellung, Stammdatenoptimierung, Umstellung des MRP-Prozesses von bedarfs- auf absatzplangesteuerte Planung",
      ],
      categories: "Diverse Rohstoffe, Chemikalien, Primär- und Sekundärpackmittel, Logistik- und Betriebsmittelmaterial (Pallecons, Inliner, IBC, Paletten), Dienstleistung Lohnhersteller (CMO's)",
    },
    en: {
      leadership: [
        "Management of procurement and material scheduling for plants Norderstedt (formerly Dankwardt) and Pfalzfeldt as well as 27 CMOs (contract manufacturer supply)",
        "Management of various special SCM projects, procurement processes and logistics",
      ],
      activities: [
        "Steering and ensuring demand-oriented planning and provision of raw materials, primary and secondary packaging, logistics materials and consumables for the plants",
        "Optimization of processes and materials for bulk production and logistics",
        "Category optimization and development of sourcing and supply strategy for consumables and logistics materials",
        "Support of management in production planning and control",
        "Optimization of systems (proAlpha and Blending): master data, especially scheduling and logistics parameters",
        "Process management along the supply chain: packaging planning and provision, master data optimization, transition of MRP process from demand-driven to sales-plan-driven planning",
      ],
      categories: "Various raw materials, chemicals, primary and secondary packaging, logistics and operating materials (Pallecons, inliners, IBCs, pallets), contract manufacturing services (CMOs)",
    },
    fr: {
      leadership: [
        "Direction des achats et de l'ordonnancement des matériaux pour les usines Norderstedt (anciennement Dankwardt) et Pfalzfeldt ainsi que pour 27 CMOs (approvisionnement des fabricants sous contrat)",
        "Management de divers projets spéciaux SCM, processus d'achats et logistique",
      ],
      activities: [
        "Pilotage et assurance de la planification et de la mise à disposition orientée besoins de matières premières, emballages primaires et secondaires, matériaux logistiques et produits d'exploitation pour les usines",
        "Optimisation des processus et matériaux pour la production en vrac et la logistique",
        "Optimisation des catégories et développement de la stratégie sourcing et supply pour les consommables et matériaux logistiques",
        "Soutien de la direction dans la planification et le pilotage de production",
        "Optimisation des systèmes (proAlpha et Blending) : données de base, notamment les paramètres d'ordonnancement et de logistique",
        "Management des processus le long de la supply chain : planification et mise à disposition des emballages, optimisation des données de base, transition du processus MRP de la planification basée sur les besoins à la planification basée sur le plan de vente",
      ],
      categories: "Diverses matières premières, produits chimiques, emballages primaires et secondaires, matériaux logistiques et d'exploitation (Pallecons, inliners, IBC, palettes), services de fabrication sous contrat (CMOs)",
    },
  },

  // ─── Vahle ──────────────────────────────────────────────────────────────────
  vahle: {
    de: {
      leadership: [
        "Leitung des Bereiches mit 16 Mitarbeitern im Tagesgeschäft und Transformationsprojekt",
        "Transformation des Bereiches durch Organisationsrestrukturierung",
      ],
      activities: [
        "Operatives Tagesgeschäft: Führen SCM Teams Produktionsplanung/-Steuerung und Einkauf",
        "Supply Chain Evaluierung und Optimierung: Projektmanagement Organisationsanalyse und -bewertung (Strukturen, Geschäftsprozesse und Abbildung in SAP, Organigramm, Prozesse, Aufgaben, Stellen, Qualifizierung)",
        "Prozessintegration & Optimierung: Optimierung der Schnittstelle PPS und Produktion (Feinplanung, Umsetzung der freigegebenen Fertigungsaufträge und Rückmeldung), Automatisierung von Teilprozessen",
        "Operative Prozessverantwortung: Überwachung der Kernaktivitäten in der Produktionsplanung und strategischer Einkauf, Steuerung der Aktivitäten im Strategischen Einkauf (Sourcing, Ausschreibungen, Verhandlungen, SRM)",
        "Entwicklung absatzbasiertes langfristiges Produktionsplanungskonzept (Umstellung auf Forecastplanung, S&OP), Analyse der logistischen Prozesse im Hinblick auf die Optimierung des Service Grades",
        "KPI Entwicklung (Störgrößen entlang der Prozesskette, Service Grad, Ausnahmen, Backlog, Belastungssteuerung)",
      ],
      spezifisch: [
        "Bewertung und Optimierung Shopfloor Management Ebene 1 und Einführung von Shopfloor Management Ebene 2",
        "Entwicklung von spezifischen Kennzahlen (Prozessstörgrößen, Belastungsgrenzen Mitarbeiter)",
      ],
      categories: "Verpackungsmaterial (Holz, Kartonage, Füllmaterialien), Stanz-, Dreh-, Frästeile aus Metallen und Kunststoffen, Rohmaterial Stangenware, Bleche, Kabel, Elektronische Komponenten, C-Teile (Din-/Normteile), Kupfer, Stahl, Aluminium",
    },
    en: {
      leadership: [
        "Management of 16 staff in day-to-day operations and transformation project",
        "Transformation of the department through organizational restructuring",
      ],
      activities: [
        "Day-to-day operations: management of SCM teams for production planning/control and procurement",
        "Supply chain evaluation and optimization: project management of organizational analysis (structures, business processes and SAP mapping, org chart, processes, tasks, positions, qualifications)",
        "Process integration & optimization: optimization of PPS-production interface (detailed scheduling, execution of released production orders and feedback), partial process automation",
        "Operational process responsibility: monitoring of core activities in production planning and strategic procurement, steering of strategic procurement activities (sourcing, tenders, negotiations, SRM)",
        "Development of sales-based long-term production planning concept (transition to forecast planning, S&OP), analysis of logistics processes to optimize service level",
        "KPI development (disruption factors along the process chain, service level, exceptions, backlog, load management)",
      ],
      spezifisch: [
        "Assessment and optimization of Shopfloor Management Level 1 and introduction of Shopfloor Management Level 2",
        "Development of specific KPIs (process disruption factors, staff workload limits)",
      ],
      categories: "Packaging materials (wood, cardboard, filling materials), stamped/turned/milled parts from metals and plastics, raw material bar stock, sheet metal, cables, electronic components, C-parts (DIN/standard parts), copper, steel, aluminum",
    },
    fr: {
      leadership: [
        "Direction de 16 collaborateurs dans les activités quotidiennes et le projet de transformation",
        "Transformation du département par restructuration organisationnelle",
      ],
      activities: [
        "Activités quotidiennes : direction des équipes SCM planification/pilotage de production et achats",
        "Évaluation et optimisation de la supply chain : gestion de projet d'analyse et d'évaluation organisationnelle (structures, processus métier et cartographie SAP, organigramme, processus, tâches, postes, qualifications)",
        "Intégration & optimisation des processus : optimisation de l'interface PPS-production (planification fine, exécution des ordres de fabrication libérés et feedback), automatisation de processus partiels",
        "Responsabilité opérationnelle des processus : surveillance des activités clés en planification de production et achats stratégiques, pilotage des activités achats stratégiques (sourcing, appels d'offres, négociations, SRM)",
        "Développement du concept de planification de production à long terme basé sur les ventes (transition vers la planification sur forecast, S&OP), analyse des processus logistiques pour l'optimisation du niveau de service",
        "Développement de KPIs (facteurs de perturbation le long de la chaîne de processus, niveau de service, exceptions, backlog, gestion de la charge)",
      ],
      spezifisch: [
        "Évaluation et optimisation du Shopfloor Management Niveau 1 et introduction du Shopfloor Management Niveau 2",
        "Développement d'indicateurs spécifiques (facteurs de perturbation des processus, limites de charge des collaborateurs)",
      ],
      categories: "Matériaux d'emballage (bois, carton, matériaux de remplissage), pièces estampées/tournées/fraisées en métaux et plastiques, matière première en barre, tôles, câbles, composants électroniques, pièces C (pièces DIN/standard), cuivre, acier, aluminium",
    },
  },

  // ─── Osypka ──────────────────────────────────────────────────────────────────
  osypka: {
    de: {
      leadership: [
        "Leitung des Bereiches SCM mit 28 Mitarbeitern (Order Fulfillment, AVOR, Produktionsplanung, Einkauf, Sterilisation, Endverpackung, Versand und Lagerwirtschaft)",
        "Projektleitung und Organisationsentwicklung der Bestellabwicklung, Produktionsplanung/-steuerung und Materialbedarfsplanung im Zusammenhang mit dem proAlpha Software Update Projekt (von Version 5.2 auf 9.5)",
      ],
      activities: [
        "Operatives Tagesgeschäft: Führung SCM Team, Leitung Shopfloor, Leitung Taskforce, Leitung ERP Update SCM Team",
        "Supply Chain Evaluierung und Optimierung: Durchführung einer Supply Chain Netzwerkanalyse sowie Entwicklung und Umsetzungsplanung einer Supply-Chain-Strategie mit dem Ziel einer effizienten und kostenoptimalen Produktion und Versorgung",
        "Prozessintegration & Optimierung: Sicherstellung einer durchgängigen Prozesslandschaft entlang der Lieferkette, Analyse und Definition von KPI zur Verbesserung von Wiederbeschaffungs- und Durchlaufzeiten sowie Lagerumschlag",
        "Kostenmanagement & Digitalisierung: Identifikation und Umsetzung von Optimierungsmaßnahmen zur Effizienzsteigerung sowie SCM seitige Integration in das proAlpha Update Projekt",
        "Operative Prozessverantwortung: Planung und Steuerung von Produktionsaufträgen, Auftragsfreigabe und Order Fulfillment unter Berücksichtigung von Prozessstörungen und Backlog, tägliche Anpassung und Feinstplanung",
        "Vertragsmanagement: Kaufmännische Standardisierung von Kundenverträgen im Hinblick auf logistische Prozesse und Auftragsabwicklung, Vertragsverhandlungen mit Kunden (Optimierung bestehender Verträge)",
      ],
      spezifisch: [
        "Optimierung der Planungs- und Wertschöpfungsprozesse für Eigenprodukte (VACS Katheter, Elektroden, TME) unter Berücksichtigung der Baugruppenfertigung Spritzgussteile, Extrusion und Drehteile sowie Kundenbeistellungen und Lohnhersteller",
        "Aufbau und Steuerung Taskforce für VACS Katheter inkl. Entwicklung von Kennzahlen (OEE, Durchlaufzeiten, Prozessstörgrößen, Bestände, Backlog/Backorder) unter Berücksichtigung von Change Management, CAPA, Traceability, GxP, Sonderfreigaben, Root Cause Analysis",
        "Einführung eines rollierenden Forecasts für die Eigenprodukte, Einführung einheitlicher Forecast und S&OP Struktur",
        "Restrukturierung der Produktionsplanung und -steuerung für VACS Katheter unter besonderer Berücksichtigung der regulatorischen Vorgaben (MDR, FDA, EN ISO 13485:2016) und firmenspezifischer Vereinbarungen",
        "Aufbau eines zahlen- und KPI getriebenen SCM Reporting für Eigenprodukte",
      ],
      categories: "Contract Manufacturing, Zeichnungsteile, PCBA, EMS, Vorrichtungen und Werkzeuge, Granulate für PE und Silikonspritzguss, Kunststoffschläuche, Verpackungsmaterial, Komponenten Stanz-, Dreh-, Frästeile aus Metallen und Kunststoffen, Edelmetalle, Kabel, Elektronische Komponenten, Verbrauchsmaterial, C-Teile (Din-/Normteile), Produktionsanlagen",
    },
    en: {
      leadership: [
        "Management of SCM department with 28 staff (order fulfillment, AVOR, production planning, procurement, sterilization, final packaging, dispatch and warehousing)",
        "Project management and organizational development of order processing, production planning/control and MRP in connection with the proAlpha software update project (v5.2 to v9.5)",
      ],
      activities: [
        "Day-to-day operations: SCM team management, shopfloor management, taskforce management, ERP update SCM team management",
        "Supply chain evaluation and optimization: supply chain network analysis and development plus implementation planning of a supply chain strategy for efficient and cost-optimized production and supply",
        "Process integration & optimization: ensuring an end-to-end process landscape along the supply chain, analysis and definition of KPIs for improving replenishment and throughput times and inventory turns",
        "Cost management & digitalization: identification and implementation of efficiency optimization measures and SCM-side integration into the proAlpha update project",
        "Operational process responsibility: planning and control of production orders, order release and order fulfillment considering process disruptions and backlog, daily fine-planning",
        "Contract management: commercial standardization of customer contracts with regard to logistics processes and order processing, contract negotiations with customers (optimization of existing contracts)",
      ],
      spezifisch: [
        "Optimization of planning and value creation processes for own products (VACS catheter, electrodes, TME) considering sub-assembly manufacturing (injection molding, extrusion, turned parts) and customer-supplied materials and contract manufacturers",
        "Build-up and management of VACS catheter taskforce incl. KPI development (OEE, throughput times, process disruption factors, inventories, backlog/backorders) considering change management, CAPA, traceability, GxP, special releases, root cause analysis",
        "Introduction of rolling forecast for own products, introduction of unified forecast and S&OP structure",
        "Restructuring of production planning and control for VACS catheter with special regard to regulatory requirements (MDR, FDA, EN ISO 13485:2016) and company-specific agreements",
        "Build-up of data- and KPI-driven SCM reporting for own products",
      ],
      categories: "Contract manufacturing, drawing parts, PCBA, EMS, fixtures and tools, granulates for PE and silicone injection molding, plastic tubes, packaging materials, stamped/turned/milled components from metals and plastics, precious metals, cables, electronic components, consumables, C-parts (DIN/standard parts), production equipment",
    },
    fr: {
      leadership: [
        "Direction du département SCM avec 28 collaborateurs (order fulfillment, AVOR, planification de production, achats, stérilisation, emballage final, expédition et gestion des entrepôts)",
        "Gestion de projet et développement organisationnel du traitement des commandes, de la planification/pilotage de production et de la planification des besoins en matériaux dans le cadre du projet de mise à jour du logiciel proAlpha (v5.2 à v9.5)",
      ],
      activities: [
        "Activités quotidiennes : direction de l'équipe SCM, gestion du shopfloor, direction de la taskforce, direction de l'équipe SCM de mise à jour ERP",
        "Évaluation et optimisation de la supply chain : analyse du réseau de la supply chain et développement plus planification de la mise en œuvre d'une stratégie supply chain pour une production et un approvisionnement efficaces et optimisés en coûts",
        "Intégration & optimisation des processus : assurance d'un paysage de processus end-to-end le long de la supply chain, analyse et définition des KPIs pour améliorer les délais de réapprovisionnement et de fabrication ainsi que la rotation des stocks",
        "Gestion des coûts & digitalisation : identification et mise en œuvre de mesures d'optimisation de l'efficacité ainsi qu'intégration SCM dans le projet de mise à jour proAlpha",
        "Responsabilité opérationnelle des processus : planification et pilotage des ordres de fabrication, libération des ordres et order fulfillment en tenant compte des perturbations et du backlog, planification fine quotidienne",
        "Gestion des contrats : standardisation commerciale des contrats clients concernant les processus logistiques et le traitement des commandes, négociations contractuelles avec les clients (optimisation des contrats existants)",
      ],
      spezifisch: [
        "Optimisation des processus de planification et de création de valeur pour les produits propres (cathéter VACS, électrodes, TME) en tenant compte de la fabrication de sous-ensembles (moulage par injection, extrusion, pièces tournées) et des fournitures clients et des fabricants sous contrat",
        "Construction et pilotage de la taskforce cathéter VACS incl. développement de KPIs (OEE, délais de fabrication, facteurs de perturbation, stocks, backlog/backorders) en tenant compte du change management, CAPA, traçabilité, GxP, libérations spéciales, analyse des causes racines",
        "Introduction d'un forecast glissant pour les produits propres, introduction d'une structure de forecast et de S&OP unifiée",
        "Restructuration de la planification et du pilotage de production pour le cathéter VACS en tenant particulièrement compte des exigences réglementaires (MDR, FDA, EN ISO 13485:2016) et des accords spécifiques à l'entreprise",
        "Construction d'un reporting SCM basé sur les données et les KPIs pour les produits propres",
      ],
      categories: "Fabrication sous contrat, pièces dessinées, PCBA, EMS, outillages et fixations, granulés pour moulage par injection PE et silicone, tubes plastiques, matériaux d'emballage, composants estampés/tournés/fraisés en métaux et plastiques, métaux précieux, câbles, composants électroniques, consommables, pièces C (pièces DIN/standard), équipements de production",
    },
  },

  // ─── Klingel / Elos Medtech ──────────────────────────────────────────────────
  klingel: {
    de: {
      leadership: [
        "Führung und Weiterentwicklung des zentralen Einkaufs mit 5 Mitarbeitern im Einklang mit ISO 13485/MDR und Unternehmenszielen im Rahmen einer Investor getriebenen Unternehmenstransformation",
        "Führung ausgewählter Optimierungsprojekte (MRO, Outsourcing Tool Management)",
      ],
      activities: [
        "Sicherstellung einer regulatorisch konformen und kostenoptimalen Versorgung mit Roh-, Hilfs- und Betriebsstoffen, Kaufteilen, Werkzeugen/Vorrichtungen, Dienstleistungen und indirektem Material",
        "Entwicklung einer umsetzungsreifen Cost Savings und Budget Planung in der Beschaffung und Definition von Beschaffungsstrategien für wesentliche Warengruppen",
        "Durchführung, Vorbereitung und Unterstützung bei Sourcing, Ausschreibungen, Vertragsverhandlungen, sowie rechtliche Absicherung über alle Materialgruppen und Beschaffungsthemen",
        "Definition, Planung, Vorbereitung und Durchführung ausgewählter, strategischer Beschaffungsinitiativen, u.a. Outsourcing Tool Management, Optimierung MRO Verträge, Anlagenankauf und -verkauf (CNC Dreh- und Fräsanlagen), Energie, Rohstoffe (Metalle), externe Dienstleister (Oberflächenbearbeitung), Facility Management Dienstleistungen",
        "Auswahl, Entwicklung und Auditierung von Lieferanten, Kennzahlensteuerung",
        "Prozessharmonisierung und -entwicklung im Einkauf, Risikomanagement, Sicherstellung der Einkaufsdokumentation, CAPA-Mitwirkung auf Basis ISO 13485/MDR",
        "Ausarbeitung und Etablierung der Prozesse und Abläufe zur Erreichung der Erfolgskennzahlen (Versorgungssicherheit (OTIF), Qualität (PPM, Audit-Findings), Time-to-Source, Kostensenkung/Cost Avoidance, Inventory Turns, Termintreue bei Werkzeug-Neuanläufen (FAT/SOP))",
      ],
      categories: "Stanz-, Dreh-, Frästeile aus Metallen und Komponenten, Contract Manufacturing/Lohnfertigung Zerspanung Zeichnungsteile, Oberflächenbehandlung, Logistikdienstleistungen, Dienstleistungen und Investitionen Facility Management, Vorrichtungen und Werkzeuge, Hilfs- und Betriebsstoffe, Dreh- und Fräsanlagen und Anlagenkomponenten, Strom und Gas",
    },
    en: {
      leadership: [
        "Management and development of central procurement with 5 staff in compliance with ISO 13485/MDR and company objectives within an investor-driven business transformation",
        "Management of selected optimization projects (MRO, outsourcing tool management)",
      ],
      activities: [
        "Ensuring regulatory-compliant and cost-optimized supply of raw materials, auxiliaries and consumables, purchased parts, tools/fixtures, services and indirect materials",
        "Development of actionable cost savings and budget planning in procurement and definition of procurement strategies for key categories",
        "Execution, preparation and support for sourcing, tenders, contract negotiations and legal safeguarding across all categories and procurement topics",
        "Definition, planning, preparation and execution of selected strategic procurement initiatives incl. outsourcing tool management, optimization of MRO contracts, equipment purchase and sale (CNC turning and milling machines), energy, raw materials (metals), external service providers (surface treatment), facility management services",
        "Selection, development and auditing of suppliers, KPI management",
        "Process harmonization and development in procurement, risk management, ensuring procurement documentation, CAPA contribution based on ISO 13485/MDR",
        "Development and establishment of processes and procedures to achieve performance KPIs (supply security (OTIF), quality (PPM, audit findings), time-to-source, cost reduction/cost avoidance, inventory turns, schedule adherence for tool launches (FAT/SOP))",
      ],
      categories: "Stamped/turned/milled metal parts and components, contract manufacturing/machining of drawing parts, surface treatment, logistics services, facility management services and investments, fixtures and tools, auxiliary and operating materials, turning and milling machines and machine components, electricity and gas",
    },
    fr: {
      leadership: [
        "Direction et développement des achats centraux avec 5 collaborateurs conformément à ISO 13485/MDR et aux objectifs de l'entreprise dans le cadre d'une transformation d'entreprise pilotée par les investisseurs",
        "Direction des projets d'optimisation sélectionnés (MRO, externalisation de la gestion des outillages)",
      ],
      activities: [
        "Assurance d'un approvisionnement conforme aux réglementations et optimisé en coûts en matières premières, auxiliaires et consommables, pièces achetées, outillages/fixations, services et matériaux indirects",
        "Développement d'une planification actionnable des économies et du budget dans les achats et définition des stratégies d'approvisionnement pour les catégories clés",
        "Exécution, préparation et soutien pour le sourcing, les appels d'offres, les négociations contractuelles et la sécurisation juridique dans toutes les catégories et sujets d'approvisionnement",
        "Définition, planification, préparation et exécution d'initiatives d'approvisionnement stratégiques sélectionnées, notamment externalisation de la gestion des outillages, optimisation des contrats MRO, achat et vente d'équipements (machines CNC de tournage et fraisage), énergie, matières premières (métaux), prestataires externes (traitement de surface), services facility management",
        "Sélection, développement et audit des fournisseurs, gestion par indicateurs",
        "Harmonisation et développement des processus achats, gestion des risques, assurance de la documentation achats, participation CAPA sur la base de ISO 13485/MDR",
        "Élaboration et établissement des processus et procédures pour atteindre les KPIs de performance (sécurité d'approvisionnement (OTIF), qualité (PPM, audit-findings), time-to-source, réduction des coûts/cost avoidance, inventory turns, respect des délais pour les démarrages d'outillages (FAT/SOP))",
      ],
      categories: "Pièces estampées/tournées/fraisées en métaux et composants, fabrication sous contrat/usinage de pièces dessinées, traitement de surface, services logistiques, services et investissements facility management, outillages et fixations, matières auxiliaires et d'exploitation, machines de tournage et de fraisage et composants de machines, électricité et gaz",
    },
  },
};
