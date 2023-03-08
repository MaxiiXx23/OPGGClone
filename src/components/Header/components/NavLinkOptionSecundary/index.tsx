import { optionsPage } from '../../../../shared/optionsPage'

import { WrapperOptionSecundary, NavLinkOption, Text } from './styles'

interface INavLinkOptionSecundaryProps {
  page: optionsPage
  pageSelected: string
  changePage: (pageCurrent: optionsPage) => void
}

export function NavLinkOptionSecundary({
  page,
  pageSelected,
  changePage,
}: INavLinkOptionSecundaryProps) {
  const isPageCurrentSelected = page === pageSelected

  function handleChangePage() {
    changePage(page)
  }

  return (
    <WrapperOptionSecundary isActive={isPageCurrentSelected}>
      <NavLinkOption to="/" onClick={handleChangePage}>
        <Text isActive={isPageCurrentSelected}>{page}</Text>
      </NavLinkOption>
    </WrapperOptionSecundary>
  )
}
