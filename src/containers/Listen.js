import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuran } from '../store/action'
import CardAudio from '../components/CardAudio'

export default () => {
    const dispatch = useDispatch()
    const quran = useSelector(state => state.quran)
    useEffect(() => {
        dispatch(getQuran())
    }, [dispatch])
    return (
        <>
            <h1>Listen</h1>
            <div className="container row offset-2">
                {
                    quran.map(sura =>
                        <CardAudio key={sura.asma} sura={sura} />)
                }
            </div>
        </>
    )
}