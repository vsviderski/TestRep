import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RequestsContainer from 'Components/Requests/RequestsContainer';
import LocationList from 'Components/Requests/Controls/LocationList';
import NotifiersList from 'Components/Requests/Controls/NotifiersList';
import { useNewEmployee } from './useNewEmployee';
import Select from './Select';
import Input from './Input';
import UnitsSelect from './UnitsSelect';
import TextAreaComponent from './TextArea';
import CalendarInput from './CalendarInput';
import SelectUnique from './SelectUnique';

const NewEmployee: FC = (): JSX.Element => {
  const [t] = useTranslation();

  const {
    onSubmit,
    onRequestsContainerClick,
    setDataForSelects,
    getNotifiers,
    notifiersListRef,
    units,
    workplacesItems,
    onChangeLocation,
    setEmptyWorkplace,
    organizations,
    ranks,
    positions,
    registration,
    wageRates,
    contractDurations,
    contractTypes,
    employeeEquipment,
    technologicalProfiles,
    curators,
    booleansSelectItems,
    reasons,
    reasonRef,
  } = useNewEmployee();

  useEffect(() => {
    setDataForSelects();
  }, []);

  return (
    <RequestsContainer
      text={t('requests.newEmployee.newEmployee')}
      onSubmit={onSubmit}
      onClick={onRequestsContainerClick}
    >
      <span>span</span>
      <span>span</span>
      <span>span</span>

      tes test test




      <SelectUnique
        label={t('requestsContainer.location')}
        child={<LocationList ref={onChangeLocation} />}
        />
      <span>span</span>
      <SelectUnique
        label={t('requestsContainer.location')}
        child={<LocationList ref={onChangeLocation} />}
      />
      <SelectUnique
        label={t('requestsContainer.location')}
        child={<LocationList ref={onChangeLocation} />}
      />
      <SelectUnique
        label={t('requestsContainer.location')}
        child={<LocationList ref={onChangeLocation} />}
      />

      <Select
        label={t('requests.newEmployee.reason')}
        refProp={reasonRef}
        elements={reasons}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.organization')}
        elements={organizations}
        isError={false}
      />

      <Input label={t('requests.newEmployee.secondNameEn')} />
      <Input label={t('requests.newEmployee.firstNameEn')} />
      <Input label={t('requests.newEmployee.secondNameLocal')} />
      <Input label={t('requests.newEmployee.firstNameLocal')} />
      <Input label={t('requests.newEmployee.middleName')} />
      <Input label={t('requests.newEmployee.phone')} />
      <Input label={t('requests.newEmployee.identification')} />

      <UnitsSelect units={units} />

      <Select
        label={t('requests.newEmployee.workplace')}
        elements={workplacesItems}
        isError={false}
        refProp={setEmptyWorkplace}
      />

      <Select
        label={t('requests.newEmployee.rank')}
        elements={ranks}
        isError={false}
        isSearch
      />

      <Select
        label={t('requests.newEmployee.position')}
        elements={positions}
        isError={false}
        isSearch
      />

      <Input label={t('requests.newEmployee.salaryGross')} />

      <CalendarInput
        label={t('requests.newEmployee.employmentDate')}
        id="date-id"
      />

      <Select
        label={t('requests.newEmployee.student')}
        elements={booleansSelectItems}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.contract')}
        elements={contractTypes}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.contractDuration')}
        elements={contractDurations}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.wageRate')}
        elements={wageRates}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.trialPeriod')}
        elements={booleansSelectItems}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.registration')}
        elements={registration}
        isError={false}
      />

      <Input label={t('requests.newEmployee.currentAddress')} isOptional />

      <Select
        label={t('requests.newEmployee.equipment')}
        elements={employeeEquipment}
        isError={false}
      />

      <TextAreaComponent
        label={t('requests.newEmployee.additionalEquipment')}
        id="additionalEquipment-id"
      />

      <Select
        label={t('requests.newEmployee.technologicalProfile')}
        elements={technologicalProfiles}
        isError={false}
      />

      <Select
        label={t('requests.newEmployee.curator')}
        elements={curators}
        isError={false}
        isSearch
      />

      <TextAreaComponent
        label={t('requests.newEmployee.details')}
        id="details-id"
      />

      <SelectUnique
        label={t('requestsContainer.notificationRecipients')}
        child={
          <NotifiersList getNotifiers={getNotifiers} ref={notifiersListRef} />
        }
      />
    </RequestsContainer>
  );
};

export default NewEmployee;
