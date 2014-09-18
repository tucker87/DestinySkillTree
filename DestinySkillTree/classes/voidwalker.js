var voidwalker = {
    name: 'Voidwalker',
    image: 'images/warlock/class.png',
    description: 'Those who have stared into the Void are not bound by the laws of space and time.',
    stats: {
        armor: 10,
        recovery: 40,
        agility: 10
    },
    skills: [
        // Row 1
        [
            {
                name: 'Vortex Grenade',
                description: 'A grenade which creates a Vortex which\ncontinually damages enemies trapped inside.',
                image: 'images/warlock/voidwalker/vortex_grenade.png'
            },
            {
                name: 'Glide',
                description: 'Jump and press X again while in the air\nto activate Glide.',
                image: 'images/warlock/voidwalker/glide.png'
            },
            {
                name: 'Nova Bomb',
                description: 'Hurl an explosive bolt of Void Light at the\nenemy, disintegrating those caught within its blast.',
                image: 'images/warlock/voidwalker/nova_bomb.png'
            },
            {
                name: 'Energy Drain',
                description: 'A powerful melee attack which drains energy\nfrom enemies and uses it to reduce the\ncooldown of your grenade.',
                image: 'images/warlock/voidwalker/energy_drain.png'
            },
            {
                name: 'Arcane Wisdom',
                description: 'Training focused on battle recovery and speed.',
                image: 'images/warlock/voidwalker/arcane.png'
            },
            {
                name: 'Anniihilate',
                description: 'Increases the size of explosions created by Nova Bomb and grenades',
                image: 'images/warlock/voidwalker/annihilate.png'
            },
            {
                name: 'Ancestral Order',
                description: 'Training focused on all attributes.',
                image: 'images/warlock/voidwalker/order.png'
            },
            {
                name: 'Vortex Mastery',
                description: 'Increases the range of Axion Bolt seekers and\nthe duration of the Vortex effect of Nova Bomb\nand Vortex Grenade.',
                image: 'images/warlock/voidwalker/vortex_mastery.png'
            }
        ],
        // Row 2
        [
            {
                name: 'Scatter Grenade',
                description: 'A grenade that splits into many submunitions\nand covers a large area with explosions.',
                image: 'images/warlock/voidwalker/scatter_grenade.png'
            },
            {
                name: 'Focused Control',
                description: 'Upgrades Glide for better directional control\nwhile in the air.',
                image: 'images/warlock/voidwalker/focused_control.png'
            },
            {
                name: 'Vortex',
                description: 'Nova Bomb creates a Vortex which continually\ndamages enemies trapped inside.',
                image: 'images/warlock/voidwalker/vortex.png'
            },
            {
                name: 'Surge',
                description: 'Killing an enemy with Energy Drain increases\nmovement speed for a short time.',
                image: 'images/warlock/voidwalker/surge.png'
            },
            {
                name: 'Arcane Spirit',
                description: 'Training focused on battle recovery and\ntoughness.',
                image: 'images/warlock/voidwalker/arcane.png'
            },
            {
                name: 'Angry Magic',
                description: 'Nova Bomb tracks enemies.',
                image: 'images/warlock/voidwalker/angry_magic.png'
            },
            {
                name: 'Chaos Order',
                description: 'Training focused on raw speed.',
                image: 'images/warlock/voidwalker/order.png'
            },
            {
                name: 'Bloom',
                description: 'Enemies killed by any of your abilities explode.',
                image: 'images/warlock/voidwalker/bloom.png'
            }
        ],
        // Row 3
        [
            {
                name: 'Axion Bolt',
                description: 'A bolt of Void Light which forks into smaller\nbolts on impact which seek toward enemies.',
                image: 'images/warlock/voidwalker/axion_bolt.png',
                column_unique: true
            },
            {
                name: 'Focused Burst',
                description: 'Upgrades Glide to provide an initial boost of\nspeed.',
                image: 'images/warlock/voidwalker/focused_burst.png'
            },
            {
                name: 'Shatter',
                description: 'Nova Bomb splits into three projectiles.',
                image: 'images/warlock/voidwalker/shatter.png'
            },
            {
                name: 'Life Steal',
                description: 'Killing an enemy with Energy Drain\nimmediately restores a significant portion of\nyour health.',
                image: 'images/warlock/voidwalker/life_steal.png'
            },
            {
                name: 'Arcane Force',
                description: 'Training focused on toughness and speed.',
                image: 'images/warlock/voidwalker/arcane.png'
            },
            {
                name: 'The Hunger',
                description: 'Increases the duration of the Energy Drain\neffect.',
                image: 'images/warlock/voidwalker/the_hunger.png'
            },
            {
                name: 'Divine Order',
                description: 'Training focused on toughness at all costs.',
                image: 'images/warlock/voidwalker/order.png'
            },
            {
                name: 'Embrace the Void',
                description: 'Damaging enemies with Nova Bomb or any\ngrenade triggers the Energy Drain effect.',
                image: 'images/warlock/voidwalker/embrace_the_void.png'
            }
            
        ],
        // Row 4
        [
            {
                name: 'Blink',
                description: 'A short distance teleport which replaces Glide.',
                image: 'images/warlock/voidwalker/blink.png'
            },
            {
                name: 'Lance',
                description: 'Nova Bomb travels farther and faster.',
                image: 'images/warlock/voidwalker/lance.png'
            },
            {
                name: 'Soul Rip',
                description: 'Killing an enemy with Energy Drain reduces\nthe cooldown of Nova Bomb.',
                image: 'images/warlock/voidwalker/soul_rip.png'
            }
        ]
    ]
}