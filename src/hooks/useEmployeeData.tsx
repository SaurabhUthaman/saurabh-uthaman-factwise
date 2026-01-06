import { useEffect, useReducer } from "react";
import type { Employee, EmployeeResponse } from "../types";

const initialSate = {
  employees: [],
  isLoading: true,
  error: ''
}

interface State {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
}

type Action ={ type: "success"; payload: Employee[] } | { type: "error"; payload: string };

const reducer = (state: State, action: Action) => {
  switch(action.type){
    case 'success':
      return {
        ...state,
        isLoading: false,
        employees : action.payload
      }
    case 'error':
      return {
        ...state,
        isLoading: false,
        error : action.payload
      }
  }
}
const useEmployeeData = (): State => {
  const [ state, dispatch ] = useReducer(reducer, initialSate)
  const { isLoading, employees, error } = state
  
  useEffect(() => {
    setTimeout(()=>{
      fetch("/data/assessment_data.json")
      .then((res) => res.json())
      .then((data: EmployeeResponse) => {
        dispatch({
          type: "success",
          payload: data.employees,
        });
      })
      .catch((err)=>{
        dispatch({
          type: "error",
          payload: "Something went wrong" + err,
        });
      });
    },3000)
  }, []);

  return { isLoading, employees, error }
}

export default useEmployeeData