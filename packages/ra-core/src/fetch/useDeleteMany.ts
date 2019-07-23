import { CRUD_DELETE_MANY } from '../actions/dataActions/crudDeleteMany';
import { DELETE_MANY } from '../dataFetchActions';
import useMutation from './useMutation';
import { Identifier } from '../types';

/**
 * Get a callback to call the dataProvider with a DELETE_MANY verb, the result
 * of the call (the list of deleted record ids), and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: [callback, { loading: true, loaded: false }]
 * - success: [callback, { data: [data from response], loading: false, loaded: true }]
 * - error: [callback, { error: [error from response], loading: false, loaded: true }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param ids The resource identifiers, e.g. [123, 456]
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success of failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [delete, { data, error, loading, loaded }].
 *
 * @example
 *
 * import { useDeleteMany } from 'react-admin';
 *
 * const BulkDeletePostsButton = ({ ids }) => {
 *     const [deleteMany, { loading, error }] = useDeleteMany('posts', ids);
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={deleteMany}>Delete selected posts</div>;
 * };
 */
const useDeleteMany = (resource: string, ids: [Identifier], options?: any) =>
    useMutation(
        { type: DELETE_MANY, resource, payload: { ids } },
        { ...options, action: CRUD_DELETE_MANY }
    );

export default useDeleteMany;
