import React from "react";
import "./cards-list.styles.css";

import { Card } from "../card/card.component";

export const CardsList = (props) => (
    <div className="card-list">
        {props.monsters.map(m => {
            return <Card key={m.id} monster={m} />  
        })}
    </div>
)
