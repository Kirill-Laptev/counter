import React from 'react'
import { CounterDataType } from '../../App'

type CounterParamsPropsType = {
    counterData: CounterDataType
    transferData: (minValue: number, maxValue: number, editMode: boolean) => void
    viewCounterInfo: (editMode: boolean) => void
}

const CounterParams: React.FC<CounterParamsPropsType> = ({counterData, transferData, viewCounterInfo}) => {

    const [minValue, setMinValue] = React.useState<number>(counterData.startCounter)
    const [maxValue, setMaxValue] = React.useState<number>(counterData.endCounter)
    const [isDisabled, setBtnDisabled] = React.useState<boolean>(false)
    const [editMode, setEditMode] = React.useState<boolean>(counterData.editMode)

    React.useEffect(() => {
        checkOnDiff()
    })

    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.name === 'minValue'){
            setMinValue(Number(e.currentTarget.value))
            setEditMode(true)
            viewCounterInfo(editMode) // editMode
        } else {
            setMaxValue(Number(e.currentTarget.value))
            setEditMode(true)
            viewCounterInfo(editMode) // editMode
        }
    }

    const checkOnDiff = () => {
        if(minValue > maxValue){
            setBtnDisabled(true)
        } else{
            setBtnDisabled(false)
        }
    }

    const setButtonHandler = () => {
        setEditMode(false)
        transferData(minValue, maxValue, editMode) // editMode
    }

    return (
        <div className='params__wrapper'>
            <div className='params__inner'>
                <div className='params'>
                    <div className='params__body'>
                        <div className='params__min'>
                            <div className='params__min_title'>min value: </div>
                            <div className='params__min_value'>
                                <input 
                                type='number' 
                                value={minValue} 
                                name='minValue'
                                onChange={changeValueHandler}
                                />
                            </div>
                        </div>
                        <div className='params__max'>
                            <div className='params__max_title'>max value: </div>
                            <div className='params__max_value'>
                                <input 
                                type='number'
                                value={maxValue}
                                name='maxValue'
                                onChange={changeValueHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button__bg'>
                    <div>
                        <button 
                        className='set' 
                        disabled={isDisabled}
                        onClick={setButtonHandler}>set</button></div>
                </div>
            </div>
        </div>
    )
}

export default CounterParams
