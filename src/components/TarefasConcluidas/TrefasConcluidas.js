import React from "react";
import {Tarefa, ListaContainer} from "./styled"

export function TarefasConcluidas (props) {

 
    return (
        <>
            <ListaContainer>
            <ul>
                    <Tarefa >
                        <s>{props.itensRemovidos}</s>
                    </Tarefa>
            </ul>
            </ListaContainer>
        </>
    );
}



