import React, { useEffect } from "react";
import {Loader} from "semantic-ui-react"
import { HeaderPage } from "../../components/Admin";
import { useCategory } from "../../hooks";

export function CategoriesAdmin() {
    const { loading, categories, getCategories } = useCategory();
    useEffect(() => getCategories(), []);
    //console.log(categories);

    return (
        <>
            <HeaderPage 
                title="Categorias"
                btnTitle="Nueva Categoria"
            />
            {loading ? (
                <Loader active inline="centered">
                    Cargando Categorias...
                </Loader>
            ) : (
                <h2>Lista de Categorias</h2>
            )}
        </>
    );
}