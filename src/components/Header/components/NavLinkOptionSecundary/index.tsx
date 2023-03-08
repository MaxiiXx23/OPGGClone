import { OptionsPage } from '../../../../shared/pageSelected'

import { WrapperOptionSecundary, NavLinkOption, Text } from './styles'

interface INavLinkOptionSecundaryProps {
  page: OptionsPage
  pageSelected: string
  changePage: (pageCurrent: OptionsPage) => void
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
