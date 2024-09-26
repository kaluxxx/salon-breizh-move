import {NextAdminOptions} from "@premieroctet/next-admin";
import {sendEmail} from "@/utils/email";
import {isGranted} from "@/utils/auth";
import {NextRequest} from "next/server";
import {prisma} from "../../prisma/lib/prisma";
import {Role} from "@/types/role";

export const options: NextAdminOptions = {
        title: "Espace administration",
        model: {
            User: {
                toString: (user) => user.email,
                aliases: {
                    email: "Email",
                    emailVerified: "Email vérifié",
                    role: "Role"
                },
                title: "Utilisateurs",
                icon: "UsersIcon",
                list: {
                    display: ["email", "emailVerified", "role"],
                    search: ["email", "role"],
                    filters: [
                        {
                            name: "Admin",
                            active: false,
                            value: {
                                role: {
                                    equals: "ADMIN",
                                },
                            },
                        },
                        {
                            name: "Modérateur",
                            active: false,
                            value: {
                                role: {
                                    equals: "MODERATOR",
                                },
                            },
                        },
                        {
                            name: "Email vérifié",
                            active: false,
                            value: {
                                emailVerified: {
                                    not: null
                                }
                            }
                        }
                    ],
                    fields: {
                        role: {
                            formatter: (role) => {
                                const roleColors = {
                                    ADMIN: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
                                    MODERATOR: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                                    USER: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                                }
                                return <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColors[role]}`}>
                                {role.toString()}
                            </span>

                            },
                        },
                        emailVerified: {
                            formatter: (emailVerified) => {
                                if (emailVerified) {
                                    return new Date(emailVerified).toLocaleDateString();
                                }
                            }
                        }
                    }
                },
                edit: {
                    display: [
                        "email",
                        "role",
                    ],
                    fields: {
                        email: {
                            validate: (email) => /\S+@\S+\.\S+/.test(email) || "Email invalide",
                            helperText: "L'email doit être valide",
                        },
                        role: {
                            validate: (role) => ["ADMIN", "MODERATOR"].includes(role) || "Role invalide",
                            helperText: "Le role doit être ADMIN ou MODERATOR pour accéder à l'administration, USER pour les utilisateurs normaux",
                        },
                    },
                    hooks: {
                        beforeDb: async function (data, mode, request) {
                            const existingUser = await prisma.user.findUnique({
                                where: {
                                    email: data.email as string
                                }
                            })
                            if (mode === "create" && existingUser) {
                                throw new Error("L'email est déjà utilisé")
                            }
                            if (!(await isGranted(request as NextRequest, [Role.ADMIN, Role.MODERATOR]))) {
                                throw new Error("Vous n'avez pas les droits pour effectuer cette action")
                            }
                            return data;
                        },
                        afterDb: async function (data, mode) {
                            if (mode === "create") {
                                await sendEmail({
                                    to: data.data.email,
                                    from: "test@test.com",
                                    subject: "Bienvenue sur notre site",
                                    text: "Bienvenue",
                                    html: "<h1>Bienvenue</h1>"
                                })
                            }
                            return data;
                        }
                    },
                    submissionErrorMessage: "Erreur lors de la soumission du formulaire",
                },
            },
            Thematic: {
                toString: (thematic) => thematic.name,
                aliases: {
                    name: "Nom",
                },
                title: "Thématiques",
                icon: "TagIcon",
                list: {
                    display: ["name"],
                    search: ["name"],
                },
                edit: {
                    display: ["name"],
                    hooks: {
                        beforeDb: async function (data, mode, request) {
                            if (!(await isGranted(request as NextRequest, [Role.ADMIN, Role.MODERATOR]))) {
                                throw new Error("Vous n'avez pas les droits pour effectuer cette action")
                            }
                            return data;
                        },
                    }
                },
            },
            EventType: {
                toString: (eventType) => eventType.name,
                aliases: {
                    name: "Nom",
                },
                title: "Types d'événements",
                icon: "PencilIcon",
                list: {
                    display: ["name"],
                    search: ["name"],
                    fields: {
                        name: {
                            formatter: (name) => {
                                return <span
                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{name}</span>
                            }
                        }
                    }
                },
                edit: {
                    display: ["name"],
                    hooks: {
                        beforeDb: async function (data, mode, request) {
                            if (!(await isGranted(request as NextRequest, [Role.ADMIN, Role.MODERATOR]))) {
                                throw new Error("Vous n'avez pas les droits pour effectuer cette action")
                            }
                            return data;
                        },
                    }
                },
            },
            Event: {
                toString: (event) => event.name,
                aliases: {
                    name: "Nom",
                    date: "Date",
                    startHour: "Heure de début",
                    endHour: "Heure de fin",
                    location: "Emplacement",
                    type: "Type",
                    description: "Description",
                    exhibitors: "Exposants",
                },
                title: "Événements",
                icon: "CalendarIcon",
                list: {
                    display: ["name", "date", "type"],
                    search: ["name", "date", "type.name"],
                    fields: {
                        date: {
                            formatter: (date) => {
                                return new Date(date).toLocaleDateString();
                            }
                        },
                        type: {
                            formatter: (type) => {
                                return <span
                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{type.name}</span>
                            }
                        }
                    }
                },
                edit: {
                    display: ["name", "date", "startHour", "endHour", "location", "type", "description", "exhibitors"],
                    fields: {
                        date: {
                            format: "date"
                        },
                        description: {
                            format: "richtext-html"
                        }
                    },
                    hooks: {
                        beforeDb: async function (data, mode, request) {
                            if (!(await isGranted(request as NextRequest, [Role.ADMIN, Role.MODERATOR]))) {
                                throw new Error("Vous n'avez pas les droits pour effectuer cette action")
                            }
                            return data;
                        },
                    }
                },
            },
            Exhibitor: {
                toString: (exhibitor) => exhibitor.companyName,
                title: "Exposants",
                icon: "UserIcon",
            },
            ShowGuide: {
                toString: (showGuide) => showGuide.companyName,
                title: "Données entreprise pour le guide",
                icon: "BookOpenIcon",
            },
            Stand: {
                toString: (stand) => stand.type,
                aliases: {
                    type: "Type",
                    variants: "Variants",
                },
                title: "Stands",
                icon: "CubeIcon",
                list: {
                    display: ["type", "variants"],
                    search: ["type"],
                },
                edit: {
                    display: ["type"],
                },
            },
            StandVariant: {
                toString: (standVariant) => standVariant.name,
                aliases: {
                    name: "Nom",
                    description: "Description",
                    stand: "Type de stand",
                    price: "Prix",
                    minSize: "Taille minimum du stand",
                    maxSize: "Taille maximum du stand",
                    size: "Taille du stand",
                },
                title: "Variants de stand",
                icon: "CubeIcon",
                list: {
                    display: ["stand", "name", "price"],
                    search: ["name", "price", "stand.type"],
                    fields: {
                        price: {
                            formatter: (price) => {
                                if (price === 0) {
                                    return ""
                                }
                                return `${price} €`
                            }
                        },
                        stand: {
                            formatter: (stand) => {
                                return stand.type
                            },
                        }
                    }
                },
                edit: {
                    display: ["name", "stand", "description", "price", "minSize", "maxSize", "size"],
                    fields: {
                        description: {
                            format: "richtext-html"
                        },
                        price: {
                            format: "updown"
                        },
                        minSize: {
                            format: "updown",
                            helperText: "Taille minimum du stand en m² à remplir si le stand est de taille variable"
                        },
                        maxSize: {
                            format: "updown",
                            helperText: "Taille maximum du stand en m² à remplir si le stand est de taille variable"
                        },
                        size: {
                            format: "updown",
                            helperText: "Taille du stand en m² à remplir si le stand est de taille fixe"
                        }
                    }
                },
            }
        },
        externalLinks: [
            {
                label: "Accueil",
                url: "/",
            },
        ],
        sidebar: {
            groups: [
                {
                    title: "Général",
                    models: ['User']
                },
                {
                    title: "Salon",
                    models: ['Exhibitor', 'Event', 'ShowGuide']
                },
                {
                    title: "Système",
                    models: ['Stand', 'StandVariant', 'Thematic', 'EventType']
                },
            ]
        },
    }
;
