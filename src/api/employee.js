import request from '~/utils/request'

export function employeeList(data, method) {
  return request({
    url: '/api/employee/list',
    method: 'GET',
    params: data
  })
}

export function employeeAdd(data) {
  return request({
    url: '/api/employee/add',
    method: 'GET',
    params: data
  })
}

export function employeeUpd(data) {
  return request({
    url: '/api/employee/update',
    method: 'GET',
    params: data
  })
}

export function employeeDel(data) {
  return request({
    url: '/api/employee/delete',
    method: 'GET',
    params: data
  })
}