import 'joypad.js'; 
import { mapping } from '../mapping'

class Joypad {
    
    constructor () {
        this.buttonListeners = []
        this.axisListeners = []
        this.lockAxisMove = false
    }

    static getOne () {
        return new Joypad()
    }

    addButtonListeners (fn) {
        this.buttonListeners.push(fn)
        return this
    }

    lockAxisMoveTimer () {
        this.lockAxisMove = true
        setTimeout(() => { this.lockAxisMove = false }, 200)
    }

    addAxisListeners (fn) {
        this.axisListeners.push(fn)
        return this
    }

    handleJoypadEvent () {
        joypad.set({ axisMovementThreshold: 0.8, })

        joypad.on('button_press', (e) => {
            const { buttonName } = e.detail

            console.info('🚀  buttonName', buttonName)

            this.buttonListeners.forEach((cb) => {
                return cb(mapping[buttonName])
            })
        })

        joypad.on('axis_move', (e) => {
            if (this.lockAxisMove === false) {
                const { directionOfMovement } = e.detail
                const volumeAxis = ['bottom', 'top'].includes(directionOfMovement)

                if (volumeAxis) {
                    this.axisListeners.forEach((fn) => {
                        fn(directionOfMovement)
                    })
                }

                this.lockAxisMoveTimer()
            }
        })
    }

}

export default Joypad