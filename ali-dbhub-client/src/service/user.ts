import createRequest from './base';
import { IPageResponse, IPageParams } from '@/types';
import { IUser } from '@/typings/user';

/** 用户登录接口 */
const userLogin = createRequest<
  { userName: string; password: string },
  boolean
>('/oauth/login_a', {
  method: 'post',
});

/** 用户登出 */
const userLogout = createRequest<void, void>('/oauth/logout_a', {
  method: 'post',
});

/** 获取用户信息 */
const getUser = createRequest<void, void>('/oauth/user_a', { method: 'get' });

/** 获取用户列表信息 */
const getUserList = createRequest<IPageParams, IPageResponse<IUser>>(
  '/api/user/list',
  {
    method: 'get',
  },
);

/** 创建新用户 */
const createUser = createRequest<IUser, boolean>('/api/user/create', {
  method: 'post',
});

/** 更新用户信息 */
const updateUser = createRequest<IUser, boolean>('/api/user/update', {
  method: 'put',
});

/** 查询用户 */
const queryUserById = createRequest<{ id: number }>('/api/user/:id', {
  method: 'get',
});

/** 删除用户 */
const deleteUser = createRequest<{ id: number }>('/api/user/:id', {
  method: 'delete',
});

export {
  createUser,
  updateUser,
  queryUserById,
  deleteUser,
  getUserList,
  userLogin,
  userLogout,
  getUser,
};
