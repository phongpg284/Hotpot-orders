import { Pagination, PaginationActions } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 20, 50]} {...props} ActionsComponent={PaginationActions} />;


export default PostPagination