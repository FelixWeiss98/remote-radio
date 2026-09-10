import { describe, it, expect } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'

describe('App', () => {
  it('renders the login page on the landing route', async () => {
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })
    await flushPromises()

    expect(wrapper.get('h1').text()).toBe('Login')
  })
})
