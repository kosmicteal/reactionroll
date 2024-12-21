import { ActionIcon, Popover, SimpleGrid, Tooltip } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { LOCALE_LIST } from '../utils/localeList';

export function ChangeLanguage() {
  const { i18n } = useTranslation();

  const { t, ready } = useTranslation();

  return (
    ready && (
      <>
        <Popover position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Tooltip label={t('ChangeLanguage.tooltip')}>
              <ActionIcon
                variant="default"
                size="input-sm"
                aria-label={t('ChangeLanguage.tooltip')}
                //TODO: Add languages
                disabled
              >
                {i18n.language}
              </ActionIcon>
            </Tooltip>
          </Popover.Target>
          <Popover.Dropdown>
            <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
              {LOCALE_LIST.map(element => {
                if (element.langCode === i18n.language) return;
                return (
                  <Tooltip label={element.nativeName} key={element.langCode}>
                    <ActionIcon
                      variant="default"
                      size="input-sm"
                      aria-label={element.nativeName}
                      onClick={() => i18n.changeLanguage(element.langCode)}
                    >
                      {element.langCode}
                    </ActionIcon>
                  </Tooltip>
                );
              })}
            </SimpleGrid>
          </Popover.Dropdown>
        </Popover>
      </>
    )
  );
}
