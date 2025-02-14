# 2.1.2
### No longer broken
- drap/drop incompatibility with Obsidian was fixed [ISSUE#239](https://github.com/RafaelGB/obsidian-db-folder/issues/239)
- Split pane options was recovered [ISSUE#257](https://github.com/RafaelGB/obsidian-db-folder/issues/257)
# 2.1.1 (beta)
### Improved
- Resizing of columns performed better. [ISSUE#241](https://github.com/RafaelGB/obsidian-db-folder/issues/241)
### No longer broken
- Aligment issues when editing [ISSUE#246](https://github.com/RafaelGB/obsidian-db-folder/issues/246)
- Rename label does not affect order with zustand [ISSUE#247](https://github.com/RafaelGB/obsidian-db-folder/issues/247)
- Alter column key after modify the label [ISSUE#248](https://github.com/RafaelGB/obsidian-db-folder/issues/248)
- New rows accepts editions with zustand [ISSUE#254](https://github.com/RafaelGB/obsidian-db-folder/issues/254)
- Minor bug updating with zustand [ISSUE#245](https://github.com/RafaelGB/obsidian-db-folder/issues/245)
- new columns respect order[ISSUE#240](https://github.com/RafaelGB/obsidian-db-folder/issues/240)
# 2.1.0 (beta)
### Shiny new things
- The dispatcher of all events was migrated to Zustand! This means a better, more stable, and more efficient way to handle events. [Zustand](https://zustand.js.org/) is a library that provides a simple, efficient, and powerful way to manage state in React. Allowing future changes as formula columns. As PoC, this version update the value of `modified` column every time a cell is changed. [ISSUE#227](https://github.com/RafaelGB/obsidian-db-folder/issues/227)
### No longer broken
- qoutes inside of source query are now controlled [ISSUE#233](https://github.com/RafaelGB/obsidian-db-folder/issues/233) [jcdeichmann](https://github.com/jcdeichmann)
- Fix centered images of all notes [ISSUE#231](https://github.com/RafaelGB/obsidian-db-folder/issues/231)
- Fix LaTeX formulas presentation incompatibility [ISSUE#228](https://github.com/RafaelGB/obsidian-db-folder/issues/228)
- now is compatible with windows pane using `activeDocument`[ISSUE#199](https://github.com/RafaelGB/obsidian-db-folder/issues/199)
# 2.0.1
### No longer broken
-  Fixed selection problem with datetime columns introduced in 2.0.0.
# 2.0.0
### Shiny new things
- New style for navBar & "new row" button [ISSUE#206](https://github.com/RafaelGB/obsidian-db-folder/issues/206). Now the name of your ddbb is displayed in the navBar. To change it, just edit it into the settings.
### Improved
- Strategy of the filtering modifications. See more in this discussion [DISCUSSION#225](https://github.com/RafaelGB/obsidian-db-folder/discussions/225)

### Visual
- row template selector dark mode support [ISSUE#177](https://github.com/RafaelGB/obsidian-db-folder/issues/177)
- Improve the empty template width [ISSUE#175](https://github.com/RafaelGB/obsidian-db-folder/issues/175)
- Empty calendar cells will not show placeholder message. Just when are selected. [ISSUE#159](https://github.com/RafaelGB/obsidian-db-folder/issues/159)
### No longer broken
- Controling the duplicated columns using the file template option to create them. [ISSUE#224](https://github.com/RafaelGB/obsidian-db-folder/issues/224)
# 2.0.0-beta.4
### Improved
- Resizing do not move the column. It has its own slider
- The plugin shows a message when the edition fails including the error message. Common causes were added to the documentation [ISSUE#196](https://github.com/RafaelGB/obsidian-db-folder/issues/196)
### No longer broken
- do not lose the width property when a column is renamed [ISSUE#222](https://github.com/RafaelGB/obsidian-db-folder/issues/222)
- Edit inline fields are correctly saved [ISSUE#182](https://github.com/RafaelGB/obsidian-db-folder/issues/182)
- Where you add/delete new columns, there was ocasions where column order was not updated and provoked unselected columns [ISSUE#102](https://github.com/RafaelGB/obsidian-db-folder/issues/102)
# 2.0.0-beta.3
### Improved
- Delay of DnD improvements in the UI [ISSUE#214](https://github.com/RafaelGB/obsidian-db-folder/issues/214)
- Resizing of column is smoother [ISSUE#210](https://github.com/RafaelGB/obsidian-db-folder/issues/210)
### Visual
- new row button is aligned again with the new UI [ISSUE#208](https://github.com/RafaelGB/obsidian-db-folder/issues/208)
- Cell content is aligned again with the new UI [ISSUE#215](https://github.com/RafaelGB/obsidian-db-folder/issues/215) [artisticat1](https://github.com/artisticat1)
### No longer broken
- Control duplicates on tags and select columns [ISSUE#209](https://github.com/RafaelGB/obsidian-db-folder/issues/209)
- Sorting works with empty cells using a custom comparator (react-table not support it yet) [ISSUE#212](https://github.com/RafaelGB/obsidian-db-folder/issues/212)
# 2.0.0-beta.2
### Improved
- unwanted columns when populating based on all fields removed. Also the memory consumption of the table is reduced significantly [ISSUE#176](https://github.com/RafaelGB/obsidian-db-folder/issues/176)
### No longer broken
- empty cells can be selected again
- Now table config wraps the value with quotes [ISSUE#207](https://github.com/RafaelGB/obsidian-db-folder/issues/207)
# 2.0.0-beta.1
### Shiny new things
- new option of resizing a column. The Size is persisted. [ISSUE#50](https://github.com/RafaelGB/obsidian-db-folder/issues/50)
- Performance improvements of rendering components x5 [ISSUE#189](https://github.com/RafaelGB/obsidian-db-folder/issues/189)
### No longer broken
- Control label value before save changes [ISSUE#203](https://github.com/RafaelGB/obsidian-db-folder/issues/203)
### Developers
- Migration of React to React 18.x
- Migration of react-table-v7 to react-table-v8 (typescript native, compatibility with React 18.x)
- DnD library modified from react-beautiful-dnd to react-dnd ( compatibility with React 18.x )
- Material-ui migrated from Material-UI to MUI ( compatibility with React 18.x )
- Refactor of all components to be adapted to React 18.x
- Size of plugin from 16mb to 5mb
# 1.8.2
### No longer broken
- Hotfix of critical mapping bug [ISSUE#190](https://github.com/RafaelGB/obsidian-db-folder/issues/190)
## 1.8.1
### No longer broken
- Supports for popout windows. Create new ddbb with Obsidian v15 open a new pane instead of replace file manager [ISSUE#172](https://github.com/RafaelGB/obsidian-db-folder/issues/172)
- Create new rows with the task column enabled works well now [ISSUE#188](https://github.com/RafaelGB/obsidian-db-folder/issues/188)
## 1.8.0
### Shiny new things
- New source option: query. Use your own dataview query as source of the database. Start the query with the `FROM` term, since the plugin will autocomplete the beginning with `TABLE` and the column fields[ISSUE#156](https://github.com/RafaelGB/obsidian-db-folder/issues/156)
- Templates for new rows added! now you can choose a template folder on settings menu, then you can choose your template file easily near of the add row button[ISSUE#48](https://github.com/RafaelGB/obsidian-db-folder/issues/48)
### Improved
- Inline fields now supports render embed images with `![[note]]` syntax. [ISSUE#136](https://github.com/RafaelGB/obsidian-db-folder/issues/136)
- Now you can hide completed task on task column type [ISSUE#111](https://github.com/RafaelGB/obsidian-db-folder/issues/111)
- Now if your ddbb source is a tag, add a new row includes de tag too[ISSUE#94](https://github.com/RafaelGB/obsidian-db-folder/issues/94)
- New config property to wrap frontmatter values with quotes [ISSUE#117](https://github.com/RafaelGB/obsidian-db-folder/issues/117)
### No longer broken
- If you modify the label of a column, now exist an onMouseLeave event to blur the input and be more frieldly to the user interact with the next action without a double click (once for onBlur label edition and another for your next interaction) [ISSUE#114](https://github.com/RafaelGB/obsidian-db-folder/issues/114)
- Change the type of the column to checkbox respects the value `1` as marked and will not mark as `0` all by default [ISSUE#161](https://github.com/RafaelGB/obsidian-db-folder/issues/161)
## 1.7.2
### No longer broken
- add new rows hotfix. Was broken in 1.7.1 with refactor of datadispatch
## 1.7.1
### Shiny new things
- Create your columns easily with 2 new options. Choose a file as template or just take all the avaliable fields in your source! [ISSUE#39](https://github.com/RafaelGB/obsidian-db-folder/issues/39)
### Improved
- Now select source tags will be ordered alphabetically and the number of tags will be shown. [ISSUE#76](https://github.com/RafaelGB/obsidian-db-folder/issues/76)
## Visual
- Tag options supports dark mode [PR](https://github.com/RafaelGB/obsidian-db-folder/pull/133)[ISSUE#124](https://github.com/RafaelGB/obsidian-db-folder/issues/124) [artisticat1](https://github.com/artisticat1)
- Freeze column gap fixed [ISSUE#120](https://github.com/RafaelGB/obsidian-db-folder/issues/120) [artisticat1](https://github.com/artisticat1)
- Improvements of compact row mode [artisticat1](https://github.com/artisticat1)
### No longer broken
- More that one filter can be applied again to the same source. [ISSUE#113](https://github.com/RafaelGB/obsidian-db-folder/issues/113)
- You can not order by tags because was not prepared to do it yet (crashed). [ISSUE#119](https://github.com/RafaelGB/obsidian-db-folder/issues/119)
- Sorting state is not lost anymore when datadispatch is triggered[ISSUE#122](https://github.com/RafaelGB/obsidian-db-folder/issues/122)[ISSUE#125](https://github.com/RafaelGB/obsidian-db-folder/issues/125)
## 1.7.0
### Shiny new things
- New config option to choose the row height [ISSUE#69](https://github.com/RafaelGB/obsidian-db-folder/issues/69) [artisticat1](https://github.com/artisticat1)
- New config to freeze first column [ISSUE#51](https://github.com/RafaelGB/obsidian-db-folder/issues/51) [artisticat1](https://github.com/artisticat1)
- New type of column: Tags! Now you can select multiple options inside a cell powered with react-select component. Search of tags inside the form, control of duplicates, choose of tag colors inside the config and more! Frontmatter flavour saves the tags as yaml array. Inline flavour saves the tags as a string separated by commas [ISSUE#36](https://github.com/RafaelGB/obsidian-db-folder/issues/36)

### Improved
-  New button to remove the cell value easily of select column types
### Visual
- Visual improvements with selected tags, properties menu & calendars [PR#105](https://github.com/RafaelGB/obsidian-db-folder/pull/105) [artisticat1](https://github.com/artisticat1)
### No longer broken
- with subgroup config on, now file link is updated correctly [ISSUE#101](https://github.com/RafaelGB/obsidian-db-folder/issues/101)
- Error handler adding option labels on modal of selected columns ( and now tags too)
- Control of duplicated options during the load of database, leaving only one unique option
- Control of special character that potentially breaks yaml frontmatter [ISSUE#103](https://github.com/RafaelGB/obsidian-db-folder/issues/103)
## 1.6.3
*Published on 2022/06/04*
### No longer broken
- Duplicated column ids on new column button is controlled now [ISSUE#82](https://github.com/RafaelGB/obsidian-db-folder/issues/82)
- checkbox color supports all type of dark mode modes [ISSUE#85](https://github.com/RafaelGB/obsidian-db-folder/issues/85)
- Inconsistent name of calendar and calendar time headers fixed [ISSUE#86](https://github.com/RafaelGB/obsidian-db-folder/issues/86)
- Visual bug after deleting and adding the same column. The data was removed into the note but not into the table [ISSUE#83](https://github.com/RafaelGB/obsidian-db-folder/issues/83)
- Add column is out of draggable area now, so you cant dnd to the right [ISSUE#63](https://github.com/RafaelGB/obsidian-db-folder/issues/63)
- onBlur event when changing the name of a column now works correctly [ISSUE#96](https://github.com/RafaelGB/obsidian-db-folder/issues/96)
- `:` inside text cells now saves wrapped with `"your msg"` [ISSUE#90](https://github.com/RafaelGB/obsidian-db-folder/issues/90)
## 1.6.2
*Published on 2022/06/02*
### No longer broken
- There was some cases where editing a file without frontmatter does not create one. This is now fixed. [ISSUE#80](https://github.com/RafaelGB/obsidian-db-folder/issues/80)
## 1.6.1
*Published on 2022/06/01*
### No longer broken
- State of db columns is fixed after edit column label or create new column. That fix problem with persisting information correctly.
- Now label column edition not add _ instead of space.
## 1.6.0
*Published on 2022/05/30*
### Shiny new things
- Another kind of data sources of dataview are added(current folder will be avaliable too, of course) [ISSUE#59](https://github.com/RafaelGB/obsidian-db-folder/issues/59):
  - TAGs: select a tag from a list of all tags
  - INCOMING_LINKS: select a file from a list of all files
  - OUTGOING_LINKS: select a file from a list of all files

### No longer broken
- Filters of type "contains", "starts with" & "ends with" are fixed. A bug appears when original data was empty. [ISSUE#72](https://github.com/RafaelGB/obsidian-db-folder/issues/72)
## 1.5.1
*Published on 2022/05/29*
### Shiny new things
- Preview mode now renders a dataview table insead of markdown content! [ISSUE#41](https://github.com/RafaelGB/obsidian-db-folder/issues/41)
### Visual
- Support for darkmode to checkbox column
### No longer broken
- When new row is added and metadata column of created and modified is enabled, the metadata column is automatically filled with the current date and time instead of crashing.
## 1.5.0
*Published on 2022/05/27*
### Shiny new things
- To take advantage of the task column type architecture, Checkbox column type is added! Will be a 1 is checked, 0 is unchecked. (allows sorting & better performance)
- Improves to sorting columns: [ISSUE#67](https://github.com/RafaelGB/obsidian-db-folder/issues/67)
  - Sorting is persisted now.
  - Multi-column sorting is now possible.
  - You can remove sorting by clicking on the same header option again.

### Visual
- Text column style now justify the content of cells
- Sortable columns now have a sort icon [ISSUE#65](https://github.com/RafaelGB/obsidian-db-folder/issues/65)

### No longer broken
- Enable media links of text column type config could be edited correctly again
## 1.4.0
*Published on 2022/05/25*
### Shiny new things
- New metadata column: File tasks! You can see the tasks that are associated with each file and interact with them. Powered with tasklist render of dataview. [ISSUE#54](https://github.com/RafaelGB/obsidian-db-folder/issues/54)

### Improved
- Extra margin added to the botton and top of every cell is removed. Markdown obsidian renderer add html tagging that affected the margin.[ISSUE#71](https://github.com/RafaelGB/obsidian-db-folder/issues/71) [artisticat1](https://github.com/artisticat1)

### No longer broken
- Column settings that has a type without behavior section produce a console error no more and section tittle is not shown.
## 1.3.2
*Published on 2022/05/24*
### Improved
- Dataview Proxy DataArray are now supported. Parsed as a Array. That implies that few bugs are fixed relationated to load that kind of data.
- Order of frontmatter fields is now respected.
### No longer broken
- Yaml array frontmatter is edited correctly now. [ISSUE#61](https://github.com/RafaelGB/obsidian-db-folder/issues/61)
## 1.3.1
*Published on 2022/05/23*
### No longer broken
- dataview currently supports multiple key with same name and is considered as an array. Actually this kind of array generates an error in the database plugin. Now are controlled taking just the fist hit. It will be considered as an array with future versions.
- Add new label to selected cell type is duplicated no more. Introduced with 1.3.0 [ISSUE#64](https://github.com/RafaelGB/obsidian-db-folder/issues/64)
## 1.3.0
*Published on 2022/05/23*
### Shiny new things
- Refactor of column setting to Obsidian modal. Now every column will have its own configuration! As a consequence, the next point were possible:
  - Every text column can configure its own media settings
  - Options of Selected type column are now persistent. [ISSUE#58](https://github.com/RafaelGB/obsidian-db-folder/issues/58)
  - You can add new lavels even if does not exist in any cell (or delete it)
  - You can now select the color of the option label. [ISSUE#60](https://github.com/RafaelGB/obsidian-db-folder/issues/60)
### Improved
- The table will be refreshed when you close either the settings modal or the new modals of the column adjustments. This will suppose a minimal performance impact with a loading time of less than a second. Its a provisional solution until the refactor of react states stategy
## 1.2.0
*Published on 2022/05/19*
### Shiny new things
- URLs could be wrap as embed information [ISSUE#57](https://github.com/RafaelGB/obsidian-db-folder/issues/57)
- New configuration section to enable/disable embedding of URLs. You can choose heigth and width of the iframe.
## 1.1.3
*Published on 2022/05/18*
### No longer broken
- width of input calendar cells fixed [ISSUE#46](https://github.com/RafaelGB/obsidian-db-folder/issues/46)
- catastrofic regex failure fixed when `!` was present inside fields
## 1.1.2
*Published on 2022/05/17*
### No longer broken
- FIx edit bug added with 1.1.0 [ISSUE#47](https://github.com/RafaelGB/obsidian-db-folder/issues/47)
## 1.1.1
*Published on 2022/05/17*
### Improved
- Now rendered markdowns supports media preview with `![[wikilink.format]]` as video,audio and image. [ISSUE#17](https://github.com/RafaelGB/obsidian-db-folder/issues/17)
## 1.1.0
*Published on 2022/05/17*
### Shiny new things
- New type of column: Calendar time
- Now Text column supports Obsidian Markdown rendering (links, bold, italic, etc.) [ISSUE#35](https://github.com/RafaelGB/obsidian-db-folder/issues/35)
- MKdocs added as documentation tool of the project
### Improved
- New format of created and updated metadata columns allows sorting
### Developers
- Refactor of calendar column to support time as well. Changed the dependency of `react-calendar` to `react-datepicker` beacuse the onBlur event was not supported natively.

## 1.0.0
*Published on 2022/05/13*
### Shiny new things
- New type of column: Calendar [ISSUE#24](https://github.com/RafaelGB/obsidian-db-folder/issues/24)
- 2 new settings to show metadata file of created and modified using a toggle button [ISSUE#26](https://github.com/RafaelGB/obsidian-db-folder/issues/26)
- Now metadata columns can be sorted and add columns to the right or left
### Improved
- Type control using Literal of dataview. this will allow with futures versions the versatility of dataview plugin (images,links,...)
- Refactor of settings to control errors in case of something is missing with a marshall and unmarshall
### No longer broken
- Control of options as unique with Select column type
## 0.3.1
*Published on 2022/05/10*
### Shiny new things
- Option to enable/disable delete fields asociated with a column when you delete the column [ISSUE#28](https://github.com/RafaelGB/obsidian-db-folder/issues/28)
### No longer broken
- Resize window now do not affect the width of the table [ISSUE#34](https://github.com/RafaelGB/obsidian-db-folder/issues/34)
## 0.3.0
*Published on 2022/05/10*
### Shiny new things
- Dataview filters added on settings modal! Now you can filter the initial data obtained from the folder [ISSUE#33](https://github.com/RafaelGB/obsidian-db-folder/issues/33)
- Improve css styling [ISSUE#31](https://github.com/RafaelGB/obsidian-db-folder/pull/31) [artisticat1](https://github.com/artisticat1)
- ### Improved
- Added event of enter to create a new row [ISSUE#32](https://github.com/RafaelGB/obsidian-db-folder/issues/32)
### No longer broken
- Duplicated columns are now controled when you add it [ISSUE#32](https://github.com/RafaelGB/obsidian-db-folder/issues/32)
- DnD of columns is now scaling well the width.
## 0.2.2
*Published on 2022/05/08*
### No longer broken
- When you DnD a column and then edit the label, the column is not moved to the final. It mantains the same position. [ISSUE#30](https://github.com/RafaelGB/obsidian-db-folder/issues/30)
## 0.2.1
*Published on 2022/05/08*
### Improved
- Now when you press enter inside a text cell, it will ends the modification with onBlur event.
### No longer broken
- Create a column now adjust width automatically.
- total width of columns not broken anymore. This bug was introduced in 0.2.0
- Frontmatter fields that are not in the schema and were empty will not be insert a null value if a database field is updated. [ISSUE#29](https://github.com/RafaelGB/obsidian-db-folder/issues/29)
## 0.2.0
*Published on 2022/05/07*
### Shiny new things
- Edit inline fields are now supported! [ISSUE#25](https://github.com/RafaelGB/obsidian-db-folder/issues/25)
- Big refactor about edit engine to improve resiliency and performance
- new adjsutment section in column menu where, at the moment, you can select if column is of inline type or not
### Improved
- Now when you create a column, the field asociated is not inserted into all the rows. Just will be inserted when you edit the cell asociated.
## 0.1.2
*Published on 2022/05/04*
### Improved
- Now DnD of file column and persist order are supported. [ISSUE#18](https://github.com/RafaelGB/obsidian-db-folder/issues/18)
### No longer broken
- Change select cell type no crash the view anymore. This is a but introduced in 0.1.1.
## 0.1.1
*Published on 2022/05/03*
### Improved
- The width of columns are adjusted when a column is added of removed
### No longer broken
- Now if you update a cell and then use global filter, the value is updated correctly [ISSUE#23](https://github.com/RafaelGB/obsidian-db-folder/issues/23)
## 0.1.0
*Published on 2022/05/02*
### Shiny new things
- New button to download a CSV file with the current data (supports filtering!). Temporally this feature is inside menu bar. We are working on move it into the actual file options of Obsidian [ISSUE#15](https://github.com/RafaelGB/obsidian-db-folder/issues/15)
### Improved
- Now when you edit some cell, the plugin will check if the note has frontmatter and if the current column exist. If not it will be added automatically
- Headers are now static when you scroll down.

### Visual changes
- The search bar has been moved to a static menu bar

### No longer broken
- Now when you create a new note, the label of the file shows just the basename, not the full path.
- Add prefix to the className of components, so interference with other plugins is less probable. [ISSUE#19](https://github.com/RafaelGB/obsidian-bd-folder/issues/19)
- When column folder is activated and a file is moved, now link is updated correctly
## 0.0.7
*Published on 2022/04/27*
### Shiny new things
- New local property `group_folder_column` to specify a select column type column. This column will be used to group the notes into subfolders with the same cell value. The subfolder will be created if it does not exist. [ISSUE#11](https://github.com/RafaelGB/obsidian-bd-folder/issues/11)

### Improved
- Sustancial improvements with error handling.
- Beta of an error page if Config yaml is not parsed correctly with the details.
- Now if some core config is missing, the database will be created with the default values.
### No longer broken
- Now before render a database, it will check if dataview plugin is installed. Showing a warning message if not. [ISSUE#13](https://github.com/RafaelGB/obsidian-bd-folder/issues/13)
## 0.0.6
### No longer broken
- Fixed unable to add frontmatter to note after modify label [ISSUE#10](https://github.com/RafaelGB/obsidian-bd-folder/issues/10)
## 0.0.5
### Shiny new things
- Added Drag & Drop columns. Order is persisted [ISSUE#5](https://github.com/RafaelGB/obsidian-bd-folder/issues/5)
- Style background of the table is now adapted to the theme [PR#9](https://github.com/RafaelGB/obsidian-bd-folder/pull/9) [zubayrrr](https://github.com/zubayrrr)

### Developers
- State of table toggle configuration added. Show react table state at bottom of the page. It has a default value & local value of each dadabase.

## 0.0.4
### Shiny new things
- Global filters added

## 0.0.3
### Shiny new things
- Order rows `alphanumericFalsyLast`
- Label of columns now is editable
- Add new columns
- Delete columns
- Modify type of column

## 0.0.2
Initial version. Basic database view.
### Shiny `things`
- Cells are editable
- Cell can render markdown
- metadata columns added (just target file) Not configurable yet
### Developers
- LOGGER console configuration with 4 levels: debug, info, warn, error
