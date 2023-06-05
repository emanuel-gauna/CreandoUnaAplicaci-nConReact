import React from 'react';

import {ContentRowTop} from './ContentRowTop';
import { Movie } from '../Movie';


export const ContentWrapper = () =>{
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
               
                    <ContentRowTop />
                    <Movie />
                 
                </div>
            </div>    
        </>
    )
}
