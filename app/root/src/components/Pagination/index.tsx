import { Box, Button } from "@chakra-ui/react";
import RcPagination from "rc-pagination";
import { IconChevronLeft } from '@tabler/icons'

export interface PaginationProps {
  // disabled?: boolean;
  // hideOnSinglePage?: boolean;
  // current: number;
  // total: number;
  // pageSize?: number;
}

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <Box
      as={RcPagination}
      current={1}
      total={100}
      display="flex"
      jumpPrevIcon={() => <IconChevronLeft/>}
      itemRender={(
        page: number,
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
        element: React.ReactNode) => {
        return <Button>{page}</Button>
      }}
    ></Box>
  );
};

Pagination.defaultProps = {
  pageSize: 10,
};

export default Pagination;
