import React from 'react'
import styles from './select.module.css'
import { useState } from 'react'

type option={
  label:string,
  value:string | number
}

type SelectProps={
   multiple:boolean,
   onChange:(value:number | string) => void,
   options:option[]
}

type stringornumber = string|number

export default function Select({multiple,onChange,options}:SelectProps) {

  const [open,setopen] = useState(false)
  const [highlightIndex,setHighlight] = useState(0)
  const [selects,setselects] = useState<stringornumber[]>([])

  return (
    <div className={styles.container} tabIndex={0} onClick={(e:React.MouseEvent<HTMLDivElement>)=>{
      e.stopPropagation()
      setopen((prev)=>!prev)
      setHighlight(0)
    }} onBlur={()=>{
      setopen(false)
      setHighlight(0)
    }}>
        <div className={styles.label}>{
          !multiple ? selects.length>0 ? selects[0] : '' : selects.map((elem,index)=>{return <div key={index}className={styles.selection}
          >{elem} <div className={styles['remove-btn']} onClick={()=>{setselects((prev)=> prev.filter((selection)=>selection !== elem ))}}>&times;</div></div>})}</div>
        <div className={styles['remove-btn']} onClick={()=>{setselects([])}}>&times;</div>
        <div className={styles.linebreak}></div>
        <div className={styles['icon']}><i className="bi bi-chevron-down"></i></div>
        <ul className={styles.options}  style={{display:open ? 'block' : 'none'}}>
            {options.map((elem,index)=> 
            <li key={`${elem.value}-${index}`}
            className={`${styles.option} ${highlightIndex==index ? styles.highlighted : ''} ${selects.indexOf(elem.label) == -1? '' : styles.selected}`}
            onMouseEnter={()=>{setHighlight(index)}} 
            onClick={()=>{
              if (selects.indexOf(elem.label) == -1) {
                setselects((prev)=>multiple ? [...prev,elem.label] : [elem.label])
              }
              else{
                setselects((prev)=>prev.filter((selection)=>elem.label !== selection))
              }

              }}>{elem.label}</li>)}
        </ul>
    </div>
  )
}
