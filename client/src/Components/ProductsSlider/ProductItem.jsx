import React from 'react'

export default function ProductItem(props) {
  return (
    <div
      className="product-item"
      style={{
        textAlign: 'center',
        padding: '20px',
        borderRadius: '16px',
        backgroundColor: '#ffffff', // clean white
        boxShadow: '0 6px 18px rgba(0,0,0,0.1)', // subtle but premium shadow
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'
        e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)'
      }}
    >
      {props.children}
    </div>
  )
}
