import React from 'react'
import './App.css'
import Student from './components/button/Student'
import Card from './components/button/Card/Card'

function App() {

  let Arr = [
    {
      id: 4,
      imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      title: "This is User",
      desc: "This is MUhammad Talha"

    },
    {
      id: 4,
      imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      title: "This is User",
      desc: "This is MUhammad Talha"

    },
    {
      id: 4,
      imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      title: "This is User",
      desc: "This is MUhammad Talha"

    },
    
  ]

  return (
    <>

      {Arr ? (
        Arr.map((e, i) => {
          return (
            <Card key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
          )
        })
      ) : (
        <h1>Data Not Fetch</h1>
      )}
    </>
  )




  // return (
  //   <>
  //     <Student stdName = "Talha" stdAge = {20} stdStatus = {true}/>
  //     <Student stdName = "Nimer" stdAge = {22} stdStatus = {true}/>
  //     <Student stdName = "Kashan" stdAge = {22} stdStatus = {true}/>

  //   </>
  // )
}

export default App
