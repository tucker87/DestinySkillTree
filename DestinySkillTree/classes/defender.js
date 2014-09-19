var defender = {
            name: 'Defender',
            image: 'images/titan/defender/class.png',
            description: 'The wall against which the Darkness breaks.',
            stats: {
                armor: 40,
                recovery: 10,
                agility: 10,
            },
            skills: [
                // Row 1
                [
                    {
                        name: 'Magnetic Grenade',
                        description: 'A grenade that attaches to enemies and explodes twice.',
                        image: 'images/titan/defender/magnetic_grenade.png'
                    },
                    {
                        name: 'Lift',
                        description: 'Jump and then press X again while in the air\n to activate Lift.',
                        image: 'images/titan/defender/lift.png'
                    },
                    {
                        name: 'Ward of Dawn',
                        description: 'Shape Void Light into an indestructible shield to protect you and your allies from harm.',
                        image: 'images/titan/defender/ward_of_dawn.png'
                    },
                    {
                        name: 'Disintegrate',
                        description: 'Killing an enemy with this powerful melee attack creates a Force Barrier around you which absorbs incoming damage.',
                        image: 'images/titan/defender/disintegrate.png'
                    },
                    {
                        name: 'Titan Codex I',
                        description: 'Training focused on battle recovery and\ntoughness.',
                        buffs: {
                            armor: 10,
                            recovery: 20,
                            agility: 0
                        },
                        image: 'images/titan/defender/codex1.png'
                    },
                    {
                        name: 'Bastion',
                        description: 'Increases the duration of Ward of Dawn.',
                        buffs: {
                            armor: 0,
                            recovery: 0,
                            agility: 10
                        },
                        image: 'images/titan/defender/bastion.png'
                    },
                    {
                        name: 'Titan Codex IV',
                        description: 'Training focused on all attributes.',
                        buffs: {
                            armor: 10,
                            recovery: 20,
                            agility: 10
                        },
                        image: 'images/titan/defender/codex2.png'
                    },
                    {
                        name: 'Untouchable',
                        description: 'Reduces the cooldown time of Ward of Dawn.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 0
                        },
                        image: 'images/titan/defender/untouchable.png'
                    }
                ],
                // Row 2
                [
                    {
                        name: 'Spike Grenade',
                        description: 'A grenade that attaches to any surface and emits a torrent of damaging Void Light.',
                        image: 'images/titan/defender/spike_grenade.png'
                    },
                    {
                        name: 'Increased Height',
                        description: 'Upgrades Lift to carry you higher',
                        image: 'images/titan/defender/increased_height.png'
                    },
                    {
                        name: 'Armor of Light',
                        description: 'While inside Ward of Dawn you and your allies gain significant damage resistance.',
                        image: 'images/titan/defender/armor_of_light.png'
                    },
                    {
                        name: 'War Machine',
                        description: 'While Force Barrier is active all your weapons reload and ready blindingly fast.',
                        image: 'images/titan/defender/war_machine.png'
                    },
                    {
                        name: 'Titan Codex II',
                        description: 'Training focused on speed and\ntoughness.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 20
                        },
                        image: 'images/titan/defender/codex1.png'
                    },
                    {
                        name: 'Relentless',
                        description: 'Increases the strength and duration of Force Barrier.',
                        image: 'images/titan/defender/relentless.png'
                    },
                    {
                        name: 'Titan Codex V',
                        description: 'Training focused on maximum recovery.',
                        buffs: {
                            armor: 0,
                            recovery: 50,
                            agility: 0
                        },
                        image: 'images/titan/defender/codex2.png'
                    },
                    {
                        name: 'Iron Harvest',
                        description: 'Heavy Weapon kills have a chance to create Orbs of Light for your allies.',
                        image: 'images/titan/defender/iron_harvest.png'
                    }
                ],
                // Row 3
                [
                    {
                        name: 'Suppressor Grenade',
                        description: 'An explosive grenade that prevents enemies from using abilities for a short time.',
                        image: 'images/titan/defender/suppressor_grenade.png'
                    },
                    {
                        name: 'Increased Control',
                        description: 'Upgrades Lift for better directional control\nwhile in the air.',
                        image: 'images/titan/defender/increased_control.png'
                    },
                    {
                        name: 'Blessing of Light',
                        description: 'Passing through Ward of Dawn grants you and your allies a temporary shield.',
                        image: 'images/titan/defender/blessing_of_light.png'
                    },
                    {
                        name: 'Gift of Light',
                        description: 'While Force Barrier is active all your melee kills create Orbs of Light.',
                        image: 'images/titan/defender/gift_of_light.png'
                    },
                    {
                        name: 'Titan Codex III',
                        description: 'Training focused on battle recovery and speed.',
                        buffs: {
                            armor: 0,
                            recovery: 20,
                            agility: 20
                        },
                        image: 'images/titan/defender/codex1.png'
                    },
                    {
                        name: 'Gift of the Void',
                        description: 'As Ward of Dawn takes damage from enemy fire it creates additional Orbs of Light.',
                        image: 'images/titan/defender/gift_of_the_void.png'
                    },
                    {
                        name: 'Titan Codex VI',
                        description: 'Training focused on raw speed.',
                        buffs: {
                            armor: 10,
                            recovery: 0,
                            agility: 30
                        },
                        image: 'images/titan/defender/codex2.png'
                    },
                    {
                        name: 'Illuminated',
                        description: 'Increases the benefits granted by Blessing of Light and Weapons of Light.',
                        image: 'images/titan/defender/illuminated.png'
                    }
                ],
                // Row 4
                [
                    {
                        name: 'Catapult',
                        description: 'Upgrades Lift to provide a strong initial burst\nof momentum',
                        image: 'images/titan/defender/catapult.png'
                    },
                    {
                        name: 'Weapons of Light',
                        description: 'Passing through Ward of Dawn grants you and your allies a temporary increase to weapon damage.',
                        image: 'images/titan/defender/weapons_of_light.png'
                    },
                    {
                        name: 'Unbreakable',
                        description: 'Force Barrier continually recharges.',
                        image: 'images/titan/defender/unbreakable.png'
                    }
                ]
            ]
        }