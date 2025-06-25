"use client"; 
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import { motion, AnimatePresence } from 'framer-motion';

// URL to TopoJSON world map
const GEO_URL = '/static/world-110m.json';

// IORA member countries ISO_A3 codes
const IORA_COUNTRIES = [
  'IND', 'ZAF', 'AUS', 'IDN', 'MYS', 'THA', 'IRN', 'PAK', 'OMN', 'SRB',
  'EGY', 'KEN', 'MOZ', 'TZA', 'SLE', 'COM', 'USE', 'BDI', 'SOM', 'MDV', 'SYR', 'YEM', 'BHR', 'IND'
];

// Brief history data (example)
const COUNTRY_INFO: Record<string, { name: string; history: string }> = {
  IND: { name: 'India', history: 'Ancient civilization ...' },
  ZAF: { name: 'South Africa', history: 'Known for ...' },
  AUS: { name: 'Australia', history: 'First inhabitants ...' },
  // add other countries similarly
};

type CountryInfo = { code: string; name: string; history: string };

export const RimMapSection: React.FC = () => {
  const [selected, setSelected] = useState<CountryInfo | null>(null);

  return (
    <div className="relative w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <ComposableMap projectionConfig={{ scale: 200 }}>
          <ZoomableGroup zoom={1}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isIORA = IORA_COUNTRIES.includes(geo.properties.ISO_A3);
                  return (
                    <motion.g
                      key={geo.rsmKey}
                      whileHover={isIORA ? { translateY: -5, scale: 1.02 } : {}}
                      onClick={() => {
                        if (isIORA && COUNTRY_INFO[geo.properties.ISO_A3]) {
                          const info = COUNTRY_INFO[geo.properties.ISO_A3];
                          setSelected({ code: geo.properties.ISO_A3, ...info });
                        }
                      }}
                      style={{ cursor: isIORA ? 'pointer' : 'default' }}
                    >
                      <Geography
                        geography={geo}
                        fill={isIORA ? '#00B8D9' : '#ECEFF1'}
                        stroke="#607D8B"
                        strokeWidth={0.5}
                      />
                    </motion.g>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="w-full lg:w-1/3 p-4">
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.code}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{selected.history}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RimMapSection;
