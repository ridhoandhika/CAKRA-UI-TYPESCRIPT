import { MahasiswaFormType } from './../components/MahasiswaForm/MahasiswaForm.type';
import  axios  from 'axios';


export const getMahasiswa = () => {
    return axios.get('/mahasiswa')
}

export const getMahasiswaById = (id: number) => {
    return axios.get(`/mahasiswa/${id}`)
}

export const createhasiswa = (data: MahasiswaFormType) => {
    return axios.post('/mahasiswa/create', data)
}

export const updateMahasiswa = (id: number, data: MahasiswaFormType) => {
    return axios.post(`/mahasiswa/update/${id}`, data)
}

export const deleteMahasiswa = (id: number) => {
    return axios.delete(`/mahasiswa/delete/${id}`)
}