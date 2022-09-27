/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

Load.VueComponent('segmented', {
  props: {
    items: { type: Array, default: [], required: true },
    index: { type: Number, default: 0, required: true }
  },
  methods: {
    text (item) {
      return Array.isArray(item) ? item[0] : item
    },
    num (item) {
      return Array.isArray(item) ? item[1] : null
    }
  },
  template: `
    div._segmented => :i=index   :n=items.length
      label._item => *for=(item, i) in items   @click=$emit('click', index = i)
        span => *text=text(item)
        i => *if=num(item)!==null   *text=num(item)`
})