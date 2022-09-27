/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

Load.Vue({
  data: {
    index: {
      get menu () { return Data.get('oawu/uicolor/menu') || 0 },
      set menu (val) { return Data.set('oawu/uicolor/menu', val >= 0 ? val > 5 ? 0 : val : 5) },
      get type () { return Data.get('oawu/uicolor/type') || 0 },
      set type (val) { return Data.set('oawu/uicolor/type', val) },
      get name () { return Data.get('oawu/uicolor/name') || 0 },
      set name (val) { return Data.set('oawu/uicolor/name', val) },
      env: {
        get '0'() { return Data.get('oawu/uicolor/env/text') || 0 },
        set '0'(val) { Data.set('oawu/uicolor/env/text', val) },
        get '1'() { return Data.get('oawu/uicolor/env/background') || 0 },
        set '1'(val) { Data.set('oawu/uicolor/env/background', val) },
        get '2'() { return Data.get('oawu/uicolor/env/color') || 0 },
        set '2'(val) { Data.set('oawu/uicolor/env/color', val) },
        get '3'() { return Data.get('oawu/uicolor/env/separator') || 0 },
        set '3'(val) { Data.set('oawu/uicolor/env/separator', val) },
        get '4'() { return Data.get('oawu/uicolor/env/fill') || 0 },
        set '4'(val) { Data.set('oawu/uicolor/env/fill', val) },
        get '5'() { return Data.get('oawu/uicolor/env/gray') || 0 },
        set '5'(val) { Data.set('oawu/uicolor/env/gray', val) },
      }
    },
    groups: [
      {
        name: 'text', title: '文字', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[   0,   0,   0, 1.00 ], [ 255, 255, 255, 1.00 ]], name: 'label' },
              { colors: [[  60,  60,  67, 0.60 ], [ 235, 235, 245, 0.60 ]], name: 'secondaryLabel' },
              { colors: [[  60,  60,  67, 0.30 ], [ 235, 235, 245, 0.30 ]], name: 'tertiaryLabel' },
              { colors: [[  60,  60,  67, 0.18 ], [ 235, 235, 245, 0.18 ]], name: 'quaternaryLabel' },
              { colors: [[   0, 122, 255, 1.00 ], [  10, 132, 255, 1.00 ]], name: 'tintColor' },
              { colors: [[  60,  60,  67, 0.30 ], [ 235, 235, 245, 0.30 ]], name: 'placeholderText' },
              { colors: [[   0, 122, 255, 1.00 ], [   9, 132, 255, 1.00 ]], name: 'link' },
              { colors: [[ 255, 255, 255, 0.60 ], [ 255, 255, 255, 0.60 ]], name: 'lightText' },
              { colors: [[   0,   0,   0, 1.00 ], [   0,   0,   0, 1.00 ]], name: 'darkText' },
            ]
          }
        ]
      }, {
        name: 'background', title: '背景', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[ 255, 255, 255, 1.00 ], [  0,  0,  0, 1.00 ]], name: 'systemBackground' },
              { colors: [[ 242, 242, 247, 1.00 ], [ 28, 28, 30, 1.00 ]], name: 'secondarySystemBackground' },
              { colors: [[ 255, 255, 255, 1.00 ], [ 44, 44, 46, 1.00 ]], name: 'tertiarySystemBackground' },
              { colors: [[ 242, 242, 247, 1.00 ], [  0,  0,  0, 1.00 ]], name: 'systemGroupedBackground' },
              { colors: [[ 255, 255, 255, 1.00 ], [ 28, 28, 30, 1.00 ]], name: 'secondarySystemGroupedBackground' },
              { colors: [[ 242, 242, 247, 1.00 ], [ 44, 44, 46, 1.00 ]], name: 'tertiarySystemGroupedBackground' },
            ]
          }
        ]
      }, {
        name: 'color', title: '顏色', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[ 255,  59,  48, 1.00 ], [ 255,  69,  58, 1.00 ]], name: 'systemRed' },
              { colors: [[ 255, 149,   0, 1.00 ], [ 255, 159,  10, 1.00 ]], name: 'systemOrange' },
              { colors: [[ 255, 204,   0, 1.00 ], [ 255, 214,  10, 1.00 ]], name: 'systemYellow' },
              { colors: [[  52, 199,  89, 1.00 ], [  48, 209,  88, 1.00 ]], name: 'systemGreen' },
              { colors: [[   0, 199, 190, 1.00 ], [ 102, 212, 207, 1.00 ]], name: 'systemMint' },
              { colors: [[  48, 176, 199, 1.00 ], [  64, 200, 224, 1.00 ]], name: 'systemTeal' },
              { colors: [[  50, 173, 230, 1.00 ], [ 100, 210, 255, 1.00 ]], name: 'systemCyan' },
              { colors: [[   0, 122, 255, 1.00 ], [  10, 132, 255, 1.00 ]], name: 'systemBlue' },
              { colors: [[  88,  86, 214, 1.00 ], [  94,  92, 230, 1.00 ]], name: 'systemIndigo' },
              { colors: [[ 175,  82, 222, 1.00 ], [ 191,  90, 242, 1.00 ]], name: 'systemPurple' },
              { colors: [[ 255,  45,  85, 1.00 ], [ 255,  55,  95, 1.00 ]], name: 'systemPink' },
              { colors: [[ 162, 132,  94, 1.00 ], [ 172, 142, 104, 1.00 ]], name: 'systemBrown' },
            ]
          },
          {
            name: 'macOS', modes: [
              { colors: [[ 255,  49,  38, 1.00 ], [ 255,  79,  68, 1.00 ]], name: 'systemRed' },
              { colors: [[ 245, 139,   0, 1.00 ], [ 255, 169,  20, 1.00 ]], name: 'systemOrange' },
              { colors: [[ 245, 194,   0, 1.00 ], [ 255, 224,  20, 1.00 ]], name: 'systemYellow' },
              { colors: [[  30, 195,  55, 1.00 ], [  60, 225,  85, 1.00 ]], name: 'systemGreen' },
              { colors: [[   0, 189, 180, 1.00 ], [ 108, 224, 219, 1.00 ]], name: 'systemMint' },
              { colors: [[  46, 167, 189, 1.00 ], [  68, 212, 237, 1.00 ]], name: 'systemTeal' },
              { colors: [[  65, 175, 220, 1.00 ], [  90, 205, 250, 1.00 ]], name: 'systemCyan' },
              { colors: [[   0, 112, 245, 1.00 ], [  20, 142, 255, 1.00 ]], name: 'systemBlue' },
              { colors: [[  84,  82, 204, 1.00 ], [  99,  97, 242, 1.00 ]], name: 'systemIndigo' },
              { colors: [[ 159,  75, 201, 1.00 ], [ 204, 101, 255, 1.00 ]], name: 'systemPurple' },
              { colors: [[ 245,  35,  75, 1.00 ], [ 255,  65, 105, 1.00 ]], name: 'systemPink' },
              { colors: [[ 152, 122,  84, 1.00 ], [ 182, 152, 114, 1.00 ]], name: 'systemBrown' },
              { colors: [[ 132, 132, 137, 1.00 ], [ 162, 162, 167, 1.00 ]], name: 'systemGray' },
            ]
          },
          {
            name: 'watchOS', modes: [
              { colors: [[ 255,  59,  48, 1.00 ]], name: 'systemRed' },
              { colors: [[ 255, 149,   0, 1.00 ]], name: 'systemOrange' },
              { colors: [[ 255, 230,  32, 1.00 ]], name: 'systemYellow' },
              { colors: [[   4, 222, 113, 1.00 ]], name: 'systemGreen' },
              { colors: [[ 102, 212, 207, 1.00 ]], name: 'systemMint' },
              { colors: [[ 106, 196, 220, 1.00 ]], name: 'systemTeal' },
              { colors: [[  90, 200, 250, 1.00 ]], name: 'systemCyan' },
              { colors: [[  32, 148, 250, 1.00 ]], name: 'systemBlue' },
              { colors: [[ 120, 122, 255, 1.00 ]], name: 'systemIndigo' },
              { colors: [[ 191,  90, 242, 1.00 ]], name: 'systemPurple' },
              { colors: [[ 250,  17,  79, 1.00 ]], name: 'systemPink' },
              { colors: [[ 172, 142, 104, 1.00 ]], name: 'systemBrown' },
              { colors: [[ 155, 160, 170, 1.00 ]], name: 'systemGray' },
            ]
          }
        ]
      }, {
        name: 'separator', title: '分隔', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[  60,  60,  67, 0.29 ], [ 84,  84,  88, 0.60 ]], name: 'separator' },
              { colors: [[ 198, 198, 200, 1.00 ], [ 56,  56,  58, 1.00 ]], name: 'opaqueSeparator' },
            ]
          }
        ]
      }, {
        name: 'fill', title: '填充', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[ 120, 120, 128, 0.20 ], [ 120, 120, 128, 0.36 ]], name: 'systemFill' },
              { colors: [[ 120, 120, 128, 0.16 ], [ 120, 120, 128, 0.32 ]], name: 'secondarySystemFill' },
              { colors: [[ 118, 118, 128, 0.12 ], [ 118, 118, 128, 0.24 ]], name: 'tertiarySystemFill' },
              { colors: [[ 116, 116, 128, 0.08 ], [ 118, 118, 128, 0.18 ]], name: 'quaternarySystemFill' },
            ]
          }
        ]
      }, {
        name: 'gray', title: '灰色', envs: [
          {
            name: 'iOS', modes: [
              { colors: [[ 142, 142, 147, 1.00 ], [ 142, 142, 147, 1.00 ]], name: 'systemGray' },
              { colors: [[ 174, 174, 178, 1.00 ], [  99,  99, 102, 1.00 ]], name: 'systemGray2' },
              { colors: [[ 199, 199, 204, 1.00 ], [  72,  72,  74, 1.00 ]], name: 'systemGray3' },
              { colors: [[ 209, 209, 214, 1.00 ], [  58,  58,  60, 1.00 ]], name: 'systemGray4' },
              { colors: [[ 229, 229, 234, 1.00 ], [  44,  44,  46, 1.00 ]], name: 'systemGray5' },
              { colors: [[ 242, 242, 247, 1.00 ], [  28,  28,  30, 1.00 ]], name: 'systemGray6' },
            ]
          }
        ]
      }
    ],
    refs: [
      {text: 'OA Wu', href: 'https://www.ioa.tw'},
      {text: 'Color Palettes for Designers and Artists - Color Hunt', href: 'https://colorhunt.co/'},
      {text: 'siktsuí 色水  Color World - 免費配色工具', href: 'https://siktsui.com/home'},
      {text: 'Fresh Background Gradients | WebGradients.com 💎', href: 'https://webgradients.com/'},
      {text: 'Apple Developer Documentation', href: 'https://developer.apple.com/documentation/uikit/uicolor/standard_colors'},
      {text: 'Color - Foundations - Human Interface Guidelines - Design - Apple Developer', href: 'https://developer.apple.com/design/human-interface-guidelines/foundations/color/'},
    ],
    keys: ['iOS UIColor', 'CSS var'],
    types: ['RGBA', 'HEX'],
  },
  mounted () {
    console.error(this.index);
    
    window.addEventListener('keydown', e => {
      (e.keyCode == 38 || e.keyCode == 81) && this.index.menu--
      (e.keyCode == 40 || e.keyCode == 87) && this.index.menu++
    });
  },
  computed: {
    group () { return this.groups.find((_, i) => i == this.index.menu) },
    env () { return this.group.envs[this.index.env[this.index.menu]] },
    envNames () { return this.group.envs.map(({ name }) => name) },
    allColors () { return this.group.envs.map(({modes}) => modes.map(({ colors }) => colors)).reduce((a, b) => a.concat(b), []) }
  },
  methods: {
    nameStr (name) {
      return this.index.name
        ? `var(--ui-color-${this.index.env[this.index.menu] != 2
          ? this.index.env[this.index.menu] != 1
            ? ''
            : 'macOS_'
          : 'watchOS_'}${name})`
        : name
    },
    colorStr (color) {
      return this.index.type != 0
        ? this.index.type != 1
          ? ''
          : `#${(color[0] | 1 << 8).toString(16).slice(1)}${(color[1] | 1 << 8).toString(16).slice(1)}${(color[2] | 1 << 8).toString(16).slice(1)}${((color[3] * 255) | 1 << 8).toString(16).slice(1)}`
        : `rgba(${color.join(', ')})`
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
        segmented => :items=envNames   :index=index.env[index.menu]   @click=i => index.env[index.menu] = i
        segmented => :items=types   :index=index.type   @click=i => index.type = i
        segmented => :items=keys   :index=index.name   @click=i => index.name = i

      aside#menu._v
        div.menu._v
          label._v => *for=(group, i) in groups   :key=i   :class=['_' + group.name, {active: i == index.menu}]   @click=index.menu = i
            i => *if=group   *text=group.envs.map(({modes}) => modes.map(({ colors }) => colors)).reduce((a, b) => a.concat(b), []).length
            b => *text=group.title
            span => *text=group.name
        div.refs._v
          a => *for=({ text, href }, i) in refs   :key=i   *text=text   :href=href   target=_blank

      div#colors._h => *if=group
        div.color._v => *for=mode in env.modes   :key=mode.name
          label => *text=nameStr(mode.name)   @click=copy(nameStr(mode.name))
          div.mode._h => *for=(color, i) in mode.colors   :key=i
            figure => :style={backgroundColor: 'rgba(' + color.join(', ') + ')'}
            label => *text=colorStr(color)   @click=copy(colorStr(color))`
})
