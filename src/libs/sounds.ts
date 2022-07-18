import { Howl } from 'howler'

const click = new Howl({
    src: ['sounds/click1.ogg']
})

export const clickSound = () => {
    click.play()
}