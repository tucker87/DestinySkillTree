var striker = {
            name: 'Striker',
            image: 'images/titan/striker/class.png',
            description: 'At close quarters a fist is better than any gun.',
            stats: {
                armor: 40,
                recovery: 10,
                agility: 10,
            },
            skills: [
                // Row 1
                [
                    {
                        name: 'Flashbang Grenade',
                        description: 'An explosive grenade that disorients the\nenemies it damages.',
                        image: 'images/titan/striker/flashbang_grenade.png'
                    },
                    {
                        name: 'Lift',
                        description: 'Jump and then press X again while in the air\n to activate Lift.',
                        image: 'images/titan/striker/lift.png'
                    },
                    {
                        name: 'Fist of Havoc',
                        description: 'Smash the ground and dissolve nearby\nenemies in a maelstrom of Arc Light.',
                        image: 'images/titan/striker/fist_of_havoc.png'
                    },
                    {
                        name: 'Storm Fist',
                        description: 'A punishing melee attack that deals bonus\ndamage.',
                        image: 'images/titan/striker/storm_fist.png'
                    },
                    {
                        name: 'Titan Codex I',
                        description: 'Training focused on battle recovery and\ntoughness.',
                        buffs: {
                            armor: 10,
                            recovery: 20,
                            agility: 0
                        },
                        image: 'images/titan/striker/codex1.png'
                    },
                    {
                        name: 'Headstrong',
                        description: 'Sprinting increases the leap distance of Fist of\nHavoc.',
                        buffs: {
                            armor: 0,
                            recovery: 0,
                            agility: 10
                        },
                        image: 'images/titan/striker/headstrong.png'
                    },
                    {
                        name: 'Titan Codex IV',
                        description: 'Training focused on all attributes.',
                        buffs: {
                            armor: 10,
                            recovery: 20,
                            agility: 10
                        },
                        image: 'images/titan/striker/codex2.png'
                    },
                    {
                        name: 'Unstoppable',
                        description: 'You are harder to kill while using Fist of Havoc.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 0
                        },
                        image: 'images/titan/striker/unstoppable.png'
                    }
                ],
                // Row 2
                [
                    {
                        name: 'Pulse Grenade',
                        description: 'A grenade that periodically damages enemies\ninside its explosion radius',
                                                image: 'images/titan/striker/pulse_grenade.png'
                    },
                    {
                        name: 'Increased Height',
                        description: 'Upgrades Lift to travel to greater heights',
                        image: 'images/titan/striker/increased_height.png'
                    },
                    {
                        name: 'Aftermath',
                        description: 'Fist of Havoc leaves a damage-dealing field in\nits wake.',
                        image: 'images/titan/striker/aftermath.png'
                    },
                    {
                        name: 'Overload',
                        description: 'Hits with Storm Fist have a chance to\nimmediately reset its cooldown.',
                        image: 'images/titan/striker/overload.png'
                    },
                    {
                        name: 'Titan Codex II',
                        description: 'Training focused on speed and\ntoughness.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 20
                        },
                        image: 'images/titan/striker/codex1.png'
                    },
                    {
                        name: 'Aftershocks',
                        description: 'Increases the duration of Pulse Grenade,\nShock Grenade, and Aftermath.',
                        image: 'images/titan/striker/Aftershocks.png'
                    },
                    {
                        name: 'Titan Codex V',
                        description: 'Training focused on maximum battle recovery.',
                        buffs: {
                            armor: 0,
                            recovery: 50,
                            agility: 0
                        },
                        image: 'images/titan/striker/codex2.png'
                    },
                    {
                        name: 'Shoulder Charge',
                        description: 'After sprinting for a short time, press R1 to\n unleash a devastating melee attack.',
                        image: 'images/titan/striker/shoulder_charge.png'
                    }
                ],
                // Row 3
                [
                    {
                        name: 'Lightning Grenade',
                        description: 'A grenade that sticks to any surface \nperiodically emitting bolts of lightning.',
                        image: 'images/titan/striker/lightning_grenade.png'
                    },
                    {
                        name: 'Increased Control',
                        description: 'Upgrades Lift for better directional control\nwhile in the air.',
                        image: 'images/titan/striker/increased_control.png'
                    },
                    {
                        name: 'Death From Above',
                        description: 'After jumping, Fist of Havoc can be aimed at\nenemies below',
                        image: 'images/titan/striker/death_from_above.png'
                    },
                    {
                        name: 'Discharge',
                        description: 'Hits with Storm Fist have achance to deal area\nof effect damage around the target.',
                        image: 'images/titan/striker/discharge.png'
                    },
                    {
                        name: 'Titan Codex III',
                        description: 'Training focused on battle recovery and speed.',
                        buffs: {
                            armor: 0,
                            recovery: 20,
                            agility: 20
                        },
                        image: 'images/titan/striker/codex1.png'
                    },
                    {
                        name: 'Transfusion',
                        description: 'Kills with melee attacks immediately trigger\nhealth regeneration.',
                        image: 'images/titan/striker/transfusion.png'
                    },
                    {
                        name: 'Titan Codex VI',
                        description: 'Training focused on raw speed.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 30
                        },
                        image: 'images/titan/striker/codex2.png'
                    },
                    {
                        name: 'Juggernaut',
                        description: 'After sprinting for a short time, gain a\nprotective shield.',
                        image: 'images/titan/striker/juggernaut.png'
                    }
                ],
                // Row 4
                [
                    {
                        name: 'Catapult',
                        description: 'Upgrades Lift to provide a strong initial burst\nof momentum',
                        image: 'images/titan/striker/catapult.png'
                    },
                    {
                        name: 'Shockwave',
                        description: 'Fist of Havoc unleashes a wave of devastating\nenergy which travels along the ground.',
                        image: 'images/titan/striker/shockwave.png'
                    },
                    {
                        name: 'Amplify',
                        description: 'Kills with Storm Fist significantly reduce the\ncooldown of Fist of Havoc',
                        image: 'images/titan/striker/amplify.png'
                    }
                ]
            ]
        }