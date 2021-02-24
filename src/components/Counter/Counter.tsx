import React from 'react'
import { CounterDataType } from '../../App'

type CounterPropsType = {
    counterData: CounterDataType
}

const Counter: React.FC<CounterPropsType> = ({counterData}) => {

    const iniсializationValue = counterData.startCounter
    const [counter, setCounter] = React.useState<number>(iniсializationValue)

    React.useEffect(() => {
        setCounter(counterData.startCounter)
    }, [counterData.startCounter])

    React.useEffect(() => {
    }, [counterData.editMode])

    const increaseCounter = () => {
        if(counter < counterData.endCounter){
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(counterData.startCounter)
    }

    return (
        <div className='counter__wrapper'>
            <div className='counter__inner'>
                <div className='counter'>
                    <div className='counter__body'>
                        {counterData.editMode 
                        ? <div className='counter__info'>Enter values and press "Set"</div>
                        : <div className='counter__content'>{counter}</div>}     
                    </div>
                </div>
                <div className='buttons__bg'>
                    <div><button className='increase' onClick={increaseCounter}>increase</button></div>
                    <div><button className='reset' onClick={resetCounter}>reset</button></div>
                </div>
            </div>
        </div>
    )
}

export default Counter
