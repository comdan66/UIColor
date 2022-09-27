/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

// iOS, iPadOS
  // Red systemRed
  // 255,  59,  48
  // 255,  69,  58

  // Orange  systemOrange
  // 255, 149,   0
  // 255, 159,  10

  // Yellow  systemYellow
  // 255, 204,   0
  // 255, 214,  10

  // Green systemGreen
  //  52, 199,  89
  //  48, 209,  88

  // Mint  systemMint
  //   0,   199, 190
  // 102, 212, 207

  // Teal  systemTeal
  //  48, 176, 199
  //  64, 200, 224

  // Cyan  systemCyan
  //  50, 173, 230
  // 100, 210, 255

  // Blue  systemBlue
  //  0, 122, 255
  // 10, 132, 255

  // Indigo  systemIndigo
  //  88,  86, 214
  //  94,  92, 230

  // Purple  systemPurple
  // 175,  82, 222
  // 191,  90, 242

  // Pink  systemPink
  // 255,  45,  85
  // 255,  55,  95

  // Brown systemBrown
  // 162, 132,  94
  // 172, 142, 104

  // Gray  systemGray
  // 142, 142, 147
  // 142, 142, 147

  // Gray (2)  systemGray2
  // 174, 174, 178
  //  99,  99, 102

  // Gray (3)  systemGray3
  // 199, 199, 204
  //  72,  72,  74

  // Gray (4)  systemGray4
  // 209, 209, 214
  //  58,  58,  60

  // Gray (5)  systemGray5
  // 229, 229, 234
  //  44,  44,  46

  // Gray (6)  systemGray6
  // 242, 242, 247
  //  28,  28,  30

// macOS
  // Red systemRedColor
  // 215,   0,  21
  // 255, 105,  97

  // Orange  systemOrangeColor
  // 201,  52,   0
  // 255, 179,  64

  // Yellow  systemYellowColor
  // 160,  90,   0
  // 255, 212,  38

  // Green systemGreenColor
  //   0, 125,  27
  //  49, 222,  75

  // Mint  systemMintColor
  //  12, 129, 123
  // 102, 212, 207

  // Teal  systemTealColor
  //   0, 130, 153
  //  93, 230, 255

  // Cyan  systemCyanColor
  //   0, 113, 164
  // 112, 215, 255

  // Blue  systemBlueColor
  //   0,  64, 221
  //  64, 156, 255

  // Indigo  systemIndigoColor
  //  54,  52, 163
  // 125, 122, 255

  // Purple  systemPurpleColor
  // 173,  68, 171
  // 218, 143, 255

  // Pink  systemPinkColor
  // 211,  15,  69
  // 255, 100, 130

  // Brown systemBrownColor
  // 127, 101,  69
  // 181, 148, 105

  // Gray  systemGrayColor
  // 105, 105, 110
  // 152, 152, 157

// watchOS
  // Red systemRed
  // 255,  59,  48

  // Orange  systemOrange
  // 255, 149,  0

  // Yellow  systemYellow
  // 255, 230,  32

  // Green systemGreen
  //   4, 222, 113

  // Mint  systemMint
  // 102, 212, 207

  // Teal  systemTeal
  // 106, 196, 220

  // Cyan  systemCyan
  //  90, 200, 250

  // Blue  systemBlue
  //  32, 148, 250

  // Indigo  systemIndigo
  // 120, 122, 255

  // Purple  systemPurple
  // 191,  90, 242

  // Pink  systemPink
  // 250,  17,  79

  // Brown systemBrown
  // 172, 142, 104

  // Gray  systemGray
  // 155, 160, 170


Load.Vue({
  data: {
    index: {
      get menu () { return Data.get('oawu/uicolor/menu') || 0 },
      set menu (val) { return Data.set('oawu/uicolor/menu', val) },
      get type () { return Data.get('oawu/uicolor/type') || 0 },
      set type (val) { return Data.set('oawu/uicolor/type', val) },
      get name () { return Data.get('oawu/uicolor/name') || 0 },
      set name (val) { return Data.set('oawu/uicolor/name', val) },
    },
    groups: [
      {
        name: 'text', title: '文字', colors: [
          { light: [  0,  0,  0, 1.0 ],    dark: [ 255, 255, 255, 1.0 ], name: 'label' },
          { light: [ 60, 60, 67, 0.6 ],    dark: [ 235, 235, 245, 0.6 ], name: 'secondaryLabel' },
          { light: [ 60, 60, 67, 0.3 ],    dark: [ 235, 235, 245, 0.3 ], name: 'tertiaryLabel' },
          { light: [ 60, 60, 67, 0.18 ],   dark: [ 235, 235, 245, 0.18 ], name: 'quaternaryLabel' },
          { light: [ 60, 60, 67, 0.3 ],    dark: [ 235, 235, 245, 0.3 ], name: 'placeholderText' },
          { light: [   0, 122, 255, 1.0 ], dark: [   9, 132, 255, 1.0 ], name: 'link' },
          { light: [ 255, 255, 255, 0.6 ], dark: [ 255, 255, 255, 0.6 ], name: 'lightTt' },
          { light: [   0,   0,   0, 1.0 ], dark: [   0,   0,   0, 1.0 ], name: 'darkText' },
        ],
      }, {
        name: 'background', title: '背景', colors: [
          { light: [ 255, 255, 255, 1.0 ], dark: [  0,  0,  0, 1.0 ], name: 'systemBackground' },
          { light: [ 242, 242, 247, 1.0 ], dark: [ 28, 28, 30, 1.0 ], name: 'secondarySystemBackground' },
          { light: [ 255, 255, 255, 1.0 ], dark: [ 44, 44, 46, 1.0 ], name: 'tertiarySystemBackground' },
          { light: [ 242, 242, 247, 1.0 ], dark: [  0,  0,  0, 1.0 ], name: 'systemGroupedBackground' },
          { light: [ 255, 255, 255, 1.0 ], dark: [ 28, 28, 30, 1.0 ], name: 'secondarySystemGroupedBackground' },
          { light: [ 242, 242, 247, 1.0 ], dark: [ 44, 44, 46, 1.0 ], name: 'tertiarySystemGroupedBackground' },
        ],
      }, {
        name: 'color', title: '顏色', colors: [
          { light: [   0, 122, 255, 1.0 ], dark: [  10, 132, 255, 1.0 ], name: 'systemBlue' },

          { light: [  52, 199,  89, 1.0 ], dark: [  48, 209,  88, 1.0 ], name: 'systemGreen' },
          { light: [  88,  86, 214, 1.0 ], dark: [  94,  92, 230, 1.0 ], name: 'systemIndigo' },
          { light: [ 255, 149,   0, 1.0 ], dark: [ 255, 159,  10, 1.0 ], name: 'systemOrange' },
          { light: [ 255,  45,  85, 1.0 ], dark: [ 255,  55,  95, 1.0 ], name: 'systemPink' },
          { light: [ 175,  82, 222, 1.0 ], dark: [ 191,  90, 242, 1.0 ], name: 'systemPurple' },
          { light: [ 255,  59,  48, 1.0 ], dark: [ 255,  69,  58, 1.0 ], name: 'systemRed' },
          { light: [  48, 176, 199, 1.0 ], dark: [  64, 200, 224, 1.0 ], name: 'systemTeal' },
          { light: [ 255, 204,   0, 1.0 ], dark: [ 255, 214,  10, 1.0 ], name: 'systemYellow' },
        ],
      }, {
        name: 'separator', title: '分隔', colors: [
          { light: [  60,  60,  67, 0.29 ], dark: [ 84,  84,  88, 0.6 ], name: 'separator' },
          { light: [ 198, 198, 200, 1.0 ], dark: [ 56,  56,  58, 1.0 ], name: 'opaqueSeparator' },
        ],
      }, {
        name: 'fill', title: '填充', colors: [
          { light: [ 120, 120, 128, 0.2 ], dark: [ 120, 120, 128, 0.36 ], name: 'systemFill' },
          { light: [ 120, 120, 128, 0.16 ], dark: [ 120, 120, 128, 0.32 ], name: 'secondarySystemFill' },
          { light: [ 118, 118, 128, 0.12 ], dark: [ 118, 118, 128, 0.24 ], name: 'tertiarySystemFill' },
          { light: [ 116, 116, 128, 0.08 ], dark: [ 118, 118, 128, 0.18 ], name: 'quaternarySystemFill' },
        ],
      }, {
        name: 'gray', title: '灰色', colors: [
          { light: [ 142, 142, 147, 1.0 ], dark: [ 142, 142, 147, 1.0 ], name: 'systemGray' },
          { light: [ 174, 174, 178, 1.0 ], dark: [  99,  99, 102, 1.0 ], name: 'systemGray2' },
          { light: [ 199, 199, 204, 1.0 ], dark: [  72,  72,  74, 1.0 ], name: 'systemGray3' },
          { light: [ 209, 209, 214, 1.0 ], dark: [  58,  58,  60, 1.0 ], name: 'systemGray4' },
          { light: [ 229, 229, 234, 1.0 ], dark: [  44,  44,  46, 1.0 ], name: 'systemGray5' },
          { light: [ 242, 242, 247, 1.0 ], dark: [  28,  28,  30, 1.0 ], name: 'systemGray6' },
        ]
      }
    ],
    key: 0,
    type: 0,
    keys: ['iOS UIColor Name', 'CSS var Name'],
    types: ['RGBA', 'HEX'],
  },
  mounted () {
    window.addEventListener('keydown', e => [0,1,2,3,4,5].forEach(i => e.keyCode == 49 + i && (this.index.menu = i)));
  },
  computed: {
    group () { return this.groups.find((_, i) => i == this.index.menu) }
  },
  methods: {
    nameStr (name) {
      return this.index.name ? `var(--ui-color-${name})` : name
    },
    colorStr (color) {
      if (this.index.type == 0)
        return `rgba(${color.join(', ')})`
      if (this.index.type == 1)
        return `#${(color[0] | 1 << 8).toString(16).slice(1)}${(color[1] | 1 << 8).toString(16).slice(1)}${(color[2] | 1 << 8).toString(16).slice(1)}${((color[3] * 255) | 1 << 8).toString(16).slice(1)}`
      return ''
    },
    copy (copy) {
      const el = document.createElement('textarea')
      el.className = 'copy'
      el.value = copy
      document.body.appendChild(el)
      el.select()

      try { document.execCommand('copy'), Toastr.success('複製成功！') }
      catch (_) { Toastr.failure('複製失敗…') }

      document.body.removeChild(el)
    }
  },
  template: `
  main#app
    nav#nav._h
      segmented => :items=types   :index=index.type   @click=i => index.type = i
      segmented => :items=keys   :index=index.name   @click=i => index.name = i

    aside#menu._v
      label._v => *for=(group, i) in groups   :key=i   :class=['_' + group.name, {active: i == index.menu}]   @click=index.menu = i
        i => *if=group   *text=group.colors.length
        b => *text=group.title
        span => *text=group.name

    div#colors._h => *if=group
      div.color._v => *for=color in group.colors   :key=color.name
        label => *text=nameStr(color.name)   @click=copy(nameStr(color.name))
        div.light._h
          figure => :style={backgroundColor: 'rgba(' + color.light.join(', ') + ')'}
          label => *text=colorStr(color.light)   @click=copy(colorStr(color.light))
        div.dark._h
          figure => :style={backgroundColor: 'rgba(' + color.dark.join(', ') + ')'}
          label => *text=colorStr(color.dark)   @click=copy(colorStr(color.dark))
  `
})
