import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-4 mb-5">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />

                {/* find search bar */}
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                {/* <Route path="/" element={<MarvelPage />} /> */}
                <Route path="*" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    </>
  )
}
