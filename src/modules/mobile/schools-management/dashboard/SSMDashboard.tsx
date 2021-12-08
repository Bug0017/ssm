import { Calendar, ChoiceGroup, DatePicker, DateRangeType, Dropdown, FontWeights, getTheme, IconButton, mergeStyleSets, Modal, PrimaryButton, TextField } from "@fluentui/react";
import {  useState } from "react";
import { useNavigate } from "react-location";
import { tw } from "twind";
import { useId, useBoolean } from "@fluentui/react-hooks";
import Layout from "../../common/layout";


const cancelIcon = { iconName: "Cancel" };
const options = [
  { key: "A", text: "Holiday" },
  { key: "B", text: "Event" },
  { key: "C", text: "Exam" },
  { key: "D", text: "Others" },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();

  const [calendarValue ,setCalendarValue] = useState(new Date());
  const titleId = useId("title");
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

  return (
    <Layout>
      <div
        className={tw`mt-10 flex flex-col w-64 container mx-auto items-center`}
      >
        <PrimaryButton
          text="Go Back"
          iconProps={{ iconName: "Back" }}
          onClick={() => navigate({ to: "/schools-management" })}
          className={tw`w-64`}
        />
        <h3>Dashboard</h3>

        <Calendar
          allFocusable
          dateRangeType={DateRangeType.Day}
          highlightSelectedMonth
          showSixWeeksByDefault
          value={calendarValue}
          onSelectDate={(date, selectedDateRangeArray) => {
            setCalendarValue(date);
            showModal();
            console.log(date, selectedDateRangeArray);
          }}
        />
        <Modal
          titleAriaId={titleId}
          isOpen={isModalOpen}
          onDismiss={hideModal}
          isBlocking={false}
        >
          <div className={contentStyles.header}>
            <span id={titleId}>Plan Academic Calender</span>
            <IconButton
              styles={iconButtonStyles}
              iconProps={cancelIcon}
              ariaLabel="Close popup modal"
              onClick={hideModal}
            />
          </div>

          <div className={contentStyles.body}>
            <Dropdown
              placeholder="Select Academic Year"
              label="Academic Year"
              options={[
                { key: "apple", text: "Apple" },
                { key: "banana", text: "Banana" },
              ]}
            />
            <TextField label="Name" />
            <TextField label="Description" />
            <ChoiceGroup
              defaultSelectedKey="B"
              options={options}
              onChange={_onChange}
              label="Pick one"
              required={true}
            />
            <DatePicker
              placeholder="Select a Start date..."
              ariaLabel="Select a date"
            />
            <DatePicker
              placeholder="Select a End date..."
              ariaLabel="Select a date"
            />
            <TextField label="No. of Days" />
            <PrimaryButton text="Submit" />
          </div>
        </Modal>

        <div
          className={tw`flex bg-white flex-col shadow-xl rounded-lg w-64 py-2 px-10 mt-10 space-y-10`}
        >
          <div className={tw`flex justify-between w-full`}>
            <h3 className={tw`bg-purple-200  p-1`}>Inquiries</h3>
            <IconButton menuProps={{items:[{key:'test',text:'test'}]}}/>
          </div>
          <div className={tw`flex justify-between w-full flex-none`}>
            <h3 className={tw`text-gray-400`}>08-Dec-2021</h3>
            <h3 className={tw`text-gray-400`}>08-Dec-2021</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

function _onChange(
  ev: any,
  option: any
): void {
  console.dir(option);
}


const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
  },
  header: [
    theme.fonts.large,
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
  },
});
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
