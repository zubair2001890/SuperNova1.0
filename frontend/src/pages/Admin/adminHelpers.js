import { useDispatch, useSelector } from "react-redux";
import { fetchPendingProjects, fetchFeaturedProject } from "../../store/slices/middlewareAPI/middlewareAPI";
import { unwrapResult } from '@reduxjs/toolkit'


export const getFeaturedProjects = async function(dispatch)
{
    dispatch(fetchFeaturedProject()).then(unwrapResult).then(data => console.log(data));
}

export const promisefyArray = function(array)
{

}