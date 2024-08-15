import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComponent({
                                    page,
                                    totalPages,

                                }: {
    page: number;
    totalPages: number;
}) {
    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationPrevious
                                href={`/movie?page=${page - 1}`}
                            />
                        </PaginationItem>

                        {page > 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationLink
                                isActive={false}
                                href={`/movie?page=${page - 1}`}
                            >
                                {page - 1}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}

                <PaginationItem>
                    <PaginationLink isActive={true} href={`/browse?page=${page}`}>
                        {page}
                    </PaginationLink>
                </PaginationItem>

                {page < totalPages && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                href={`/movie?page=${page + 1}`}
                            >
                                {page + 1}
                            </PaginationLink>
                        </PaginationItem>

                        {page < totalPages - 1 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href={`/movie?page=${page + 1}`}
                            />
                        </PaginationItem>
                    </>
                )}
            </PaginationContent>
        </Pagination>
    );
}