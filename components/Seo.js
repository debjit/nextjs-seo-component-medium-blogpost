import Head from 'next/head'
import React from 'react'

export default function Seo({fields}) {
  return (
    <Head>
      {Object.entries(fields).map(([property, value]) => {        
        if(property === "canonical"){return <link key="canonical" rel="canonical" href={value} />}
        if (Array.isArray(value)) {
          return value.map((val, index) => (
            <meta
              key={`${property}-${index}`}
              property={property}
              name={property}
              content={val}
            />
          ));
        }
        return <meta key={property} property={property} name={property} content={value} />;
      })}
    </Head>
  )
}
