import React, {Component, useState, useEffect} from 'react'
import Show from './components/editTvShow.js'
import MovieForm from './components/movieForm.js'
import Axios from 'axios'
import axios from 'axios'


function TvShows() {
    const [shows, setShows] = useState([])
    // const [editToggle, setEditToggle] = useState(false)
    function initPull() {
        Axios.get("/tvshows")
                .then(res => {
                    setShows(res.data)
                }).catch(err => console.log(err))
            }
            useEffect(() => {
                initPull()
            }, [])

        function addShow(newShow) {
            axios.post("/tvshows",newShow)
            .then(res => {
                setShows(prevShows => [...prevShows,res.data])})
                .catch(err => console.log(err))
        }
        function deleteShow(tvshowId) {
            axios.delete(`/tvshows/${tvshowId}`)
            .then(res => {
                setShows(prevShows => prevShows.filter(show => show._id !== tvshowId))
            })
            .catch(err => console.log(err))
        }
        function editShows(updates, tvshowId) {
            axios.put(`/tvshows/${tvshowId}`, updates)
            .then(res  => {setShows(prevShows => prevShows.map(show => show._id !== tvshowId ? show : res.data))
            }).catch(err => console.log(err))
        }
        
        return (
            <div>
                <MovieForm submit={addShow} btnText="Add Show" />
                {shows.map(show => <Show {...show} key = {show._id} deleteShow={deleteShow} editShow={editShows} />)}
            </div>
        )
    }
    export default TvShows