/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

Load.init({
  data: {
    timer: null,
    q1: '',
    q2: '',
    messages: [],
    groups: [
      {
        key: 'text', title: '文字', colors: [
          { light: { hex: '000000ff', rgba: [ 0,  0,  0, 1]    }, dark: { hex: 'ffffffff', rgba: [255, 255, 255, 1]    }, name: 'label' },
          { light: { hex: '3c3c4399', rgba: [60, 60, 67, 0.6]  }, dark: { hex: 'ebebf599', rgba: [235, 235, 245, 0.6]  }, name: 'secondaryLabel' },
          { light: { hex: '3c3c434c', rgba: [60, 60, 67, 0.3]  }, dark: { hex: 'ebebf54c', rgba: [235, 235, 245, 0.3]  }, name: 'tertiaryLabel' },
          { light: { hex: '3c3c432d', rgba: [60, 60, 67, 0.18] }, dark: { hex: 'ebebf52d', rgba: [235, 235, 245, 0.18] }, name: 'quaternaryLabel' },
          { light: { hex: '3c3c434c', rgba: [60, 60, 67, 0.3]  }, dark: { hex: 'ebebf54c', rgba: [235, 235, 245, 0.3]  }, name: 'placeholderText' },
          { light: { hex: '007affff', rgba: [  0, 122, 255, 1]   }, dark: { hex: '0984ffff', rgba: [  9, 132, 255, 1]   }, name: 'link' },
          { light: { hex: 'ffffff99', rgba: [255, 255, 255, 0.6] }, dark: { hex: 'ffffff99', rgba: [255, 255, 255, 0.6] }, name: 'lightText' },
          { light: { hex: '000000ff', rgba: [  0,   0,   0, 1]   }, dark: { hex: '000000ff', rgba: [  0,   0,   0, 1]   }, name: 'darkText' },
        ],
      }, {
        key: 'background', title: '背景', colors: [
          { light: { hex: 'ffffffff', rgba: [255, 255, 255, 1] }, dark: { hex: '000000ff', rgba: [ 0,  0,  0, 1] }, name: 'systemBackground' },
          { light: { hex: 'f2f2f7ff', rgba: [242, 242, 247, 1] }, dark: { hex: '1c1c1eff', rgba: [28, 28, 30, 1] }, name: 'secondarySystemBackground' },
          { light: { hex: 'ffffffff', rgba: [255, 255, 255, 1] }, dark: { hex: '2c2c2eff', rgba: [44, 44, 46, 1] }, name: 'tertiarySystemBackground' },
          { light: { hex: 'f2f2f7ff', rgba: [242, 242, 247, 1] }, dark: { hex: '000000ff', rgba: [ 0,  0,  0, 1] }, name: 'systemGroupedBackground' },
          { light: { hex: 'ffffffff', rgba: [255, 255, 255, 1] }, dark: { hex: '1c1c1eff', rgba: [28, 28, 30, 1] }, name: 'secondarySystemGroupedBackground' },
          { light: { hex: 'f2f2f7ff', rgba: [242, 242, 247, 1] }, dark: { hex: '2c2c2eff', rgba: [44, 44, 46, 1] }, name: 'tertiarySystemGroupedBackground' },
        ],
      }, {
        key: 'color', title: '顏色', colors: [
          { light: { hex: '007affff', rgba: [  0, 122, 255, 1] }, dark: { hex: '0a84ffff', rgba: [ 10, 132, 255, 1] }, name: 'systemBlue' },
          { light: { hex: '34c759ff', rgba: [ 52, 199,  89, 1] }, dark: { hex: '30d158ff', rgba: [ 48, 209,  88, 1] }, name: 'systemGreen' },
          { light: { hex: '5856d6ff', rgba: [ 88,  86, 214, 1] }, dark: { hex: '5e5ce6ff', rgba: [ 94,  92, 230, 1] }, name: 'systemIndigo' },
          { light: { hex: 'ff9500ff', rgba: [255, 149,   0, 1] }, dark: { hex: 'ff9f0aff', rgba: [255, 159,  10, 1] }, name: 'systemOrange' },
          { light: { hex: 'ff2d55ff', rgba: [255,  45,  85, 1] }, dark: { hex: 'ff375fff', rgba: [255,  55,  95, 1] }, name: 'systemPink' },
          { light: { hex: 'af52deff', rgba: [175,  82, 222, 1] }, dark: { hex: 'bf5af2ff', rgba: [191,  90, 242, 1] }, name: 'systemPurple' },
          { light: { hex: 'ff3b30ff', rgba: [255,  59,  48, 1] }, dark: { hex: 'ff453aff', rgba: [255,  69,  58, 1] }, name: 'systemRed' },
          { light: { hex: '5ac8faff', rgba: [ 90, 200, 250, 1] }, dark: { hex: '64d2ffff', rgba: [100, 210, 255, 1] }, name: 'systemTeal' },
          { light: { hex: 'ffcc00ff', rgba: [255, 204,   0, 1] }, dark: { hex: 'ffd60aff', rgba: [255, 214,  10, 1] }, name: 'systemYellow' },
        ],
      }, {
        key: 'other', title: '其他', colors: [
          { light: { hex: '3c3c4349', rgba: [ 60,  60,  67, 0.29] }, dark: { hex: '54545899', rgba: [ 84,  84,  88, 0.6]  }, name: 'separator' },
          { light: { hex: 'c6c6c8ff', rgba: [198, 198, 200, 1]    }, dark: { hex: '38383aff', rgba: [ 56,  56,  58, 1]    }, name: 'opaqueSeparator' },
          { light: { hex: '78788033', rgba: [120, 120, 128, 0.2]  }, dark: { hex: '7878805b', rgba: [120, 120, 128, 0.36] }, name: 'systemFill' },
          { light: { hex: '78788028', rgba: [120, 120, 128, 0.16] }, dark: { hex: '78788051', rgba: [120, 120, 128, 0.32] }, name: 'secondarySystemFill' },
          { light: { hex: '7676801e', rgba: [118, 118, 128, 0.12] }, dark: { hex: '7676803d', rgba: [118, 118, 128, 0.24] }, name: 'tertiarySystemFill' },
          { light: { hex: '74748014', rgba: [116, 116, 128, 0.08] }, dark: { hex: '7676802d', rgba: [118, 118, 128, 0.18] }, name: 'quaternarySystemFill' },
        ],
      }, {
        key: 'gray', title: '灰色', colors: [
          { light: { hex: '8e8e93ff', rgba: [142, 142, 147, 1] }, dark: { hex: '8e8e93ff', rgba: [142, 142, 147, 1] }, name: 'systemGray' },
          { light: { hex: 'aeaeb2ff', rgba: [174, 174, 178, 1] }, dark: { hex: '636366ff', rgba: [ 99,  99, 102, 1] }, name: 'systemGray2' },
          { light: { hex: 'c7c7ccff', rgba: [199, 199, 204, 1] }, dark: { hex: '48484aff', rgba: [ 72,  72,  74, 1] }, name: 'systemGray3' },
          { light: { hex: 'd1d1d6ff', rgba: [209, 209, 214, 1] }, dark: { hex: '3a3a3cff', rgba: [ 58,  58,  60, 1] }, name: 'systemGray4' },
          { light: { hex: 'e5e5eaff', rgba: [229, 229, 234, 1] }, dark: { hex: '2c2c2eff', rgba: [ 44,  44,  46, 1] }, name: 'systemGray5' },
          { light: { hex: 'f2f2f7ff', rgba: [242, 242, 247, 1] }, dark: { hex: '1c1c1eff', rgba: [ 28,  28,  30, 1] }, name: 'systemGray6' },
        ]
      }
    ]
  },
  computed: {
    groups2 () {
      if (!this.q2) return this.groups

      const regex = new RegExp(this.q2, 'i');

      return this.groups.map(group => {
        return regex.test(group.title) || regex.test(group.key) ? { ...group } : {...group, colors: group.colors.filter(color => regex.test(color.name)) }
      }).filter(({ colors }) => colors.length)
    }
  },
  methods: {
    copy (str) {
      const el = document.createElement('textarea')
      el.className = 'copy'
      el.value = str
      document.body.appendChild(el)
      el.select()

      try {
        document.execCommand('copy')
        this.messages.push({ text: '複製成功！', id: Date.now() })
        setTimeout(_ => this.messages.shift(), 5000)
      } catch (_) {}

      document.body.removeChild(el)
    }
  },
  template: El.render(`
    main#app
      div#form
        label
          input => type=text   placeholder=關鍵字…   :autofocus=true   :required=true   @keyup=timer = setTimeout(_ => (q2 = q1.trim()), 200, timer)   *model.trim=q1

      div#alert => *if=messages.length
        span => *for=message in messages   :key=message.id   *text=message.text

      div.group => *for=(group, i) in groups2   :key=i
        header
          b => *text=group.title
          span => *text=group.key

        div.colors
          div.color => *for=color in group.colors   key=color.name
            label.name => :text=color.name   @click=copy(color.name)
            div.light
              span => :style={ backgroundColor: '#' + color.light.hex }
              div
                label.rgba => *text='rgba(' + color.light.rgba.join(', ') + ')'   @click=copy('rgba(' + color.light.rgba.join(', ') + ')')   :readonly=true
                label.hex => *text='#' + color.light.hex   @click=copy('#' + color.light.hex)   :readonly=true
            div.dark
              span => :style={ backgroundColor: '#' + color.dark.hex }
              div
                label.rgba => *text='rgba(' + color.dark.rgba.join(', ') + ')'   @click=copy('rgba(' + color.dark.rgba.join(', ') + ')')   :readonly=true
                label.hex => *text='#' + color.dark.hex   @click=copy('#' + color.dark.hex)   :readonly=true
      `)
})
