import React from 'react'
import { Navbar } from '../../ui'
import { Route, Routes } from 'react-router-dom'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-4">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero" element={<HeroPage />} />
                {/* find search bar */}
                <Route path="/" element={<MarvelPage />} />
            </Routes>
        </div>
    </>
  )
}
