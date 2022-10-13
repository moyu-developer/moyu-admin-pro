import { Center, Button, Flex } from "@chakra-ui/react";
import RcPagination from "rc-pagination";
import { IconChevronLeft, IconChevronRight, IconChevronsRight, IconChevronsLeft } from '@tabler/icons'

export interface PaginationProps {
  // disabled?: boolean;
  // hideOnSinglePage?: boolean;
  // current: number;
  // total: number;
  // pageSize?: number;
}

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <Flex
      as={RcPagination}
      current={1}
      total={100}
      gap="12px"
      prevIcon={IconChevronLeft}
      nextIcon={IconChevronRight}
      jumpNextIcon={IconChevronsRight}
      jumpPrevIcon={IconChevronsLeft}
      showPrevNextJumpers
      showQuickJumper
      showPrevNextJumpers
      listStyleType="none"
      itemRender={(
        page: number,
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
        element: React.ReactNode) => {
        // if (type === 'next') {
        //   return 'next'
        // }
        
        // if (type === 'prev') {
        //   return <Center h="full" >{element}</Center>
        // }
        return <Button >{element}</Button>
      }}
    ></Flex>
  );
};

Pagination.defaultProps = {
  pageSize: 10,
};

export default Pagination;
