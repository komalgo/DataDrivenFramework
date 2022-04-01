'Datatable.AddSheet "Module"
'Datatable.ImportSheet "C:\uft1\KeywordDrivenFramework\Organizer\organizer.xlsx",1,"Module"
Services.StartTransaction "t1"

mrowcount=datatable.GetSheet("Action1").GetRowCount 'taking action1 shet and row in action 1
msgbox mrowcount 

For i= 1 To  mrowcount  Step 1 
'
Datatable.SetCurrentRow(i)
'
Modexe=Datatable("ModuleExe","Action1") 'gettig 3rd columnof action1
If Modexe="YN" Then
	Modid=Datatable("ModuleID","Action1") 'checking with 1 col
	msgbox Modid
'	
trowcount=datatable.GetSheet("Action2").GetRowCount
msgbox trowcount
	For j=1 To trowcount step 1
		Datatable.SetCurrentRow(j)
	If Modid=Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" Then
			testcaseid=Datatable("TestcaseId","Action2")
			msgbox testcaseid
            tsrowcount=Datatable.GetSheet("Action3").GetRowCount
			msgbox tsrowcount
			For k = 1 to tsrowcount Step 1
				datatable.SetCurrentRow(k)
				If testcaseid=Datatable("TestcaseId","Action3") Then
					keyword=Datatable("Keyword","Action3")
        			msgbox keyword
					
					Select Case (keyword)
						Case "ln"
						Call login("john","hp")
						Case "ca"
						Call CloseApp()
						Case"oo"
						Call OpenOrder()
						Case "uo"
						Call UpdateOrder()
						Case "lnd"
						drowcount=datatable.GetSheet("Action4").GetRowCount
						
						For l=1 to drowcount Step 1
							datatable.SetCurrentRow(l)
							Call login(datatable("username","Action4"),datatable("password","Action4"))
							Call CloseApp()
						Next
						Case "ood"
						orrowcount=datatable.GetSheet("Action4").GetRowCount
						For m= 1 To  orrowcount Step 1
							datatable.SetCurrentRow(m)
							Call openorder(datatable("orderno","Action4"))
 @@ hightlight id_;_1927336680_;_script infofile_;_ZIP::ssf1.xml_;_
						Next
					End Select
				End If
			Next
		End If
	Next
End If
 @@ hightlight id_;_2068236888_;_script infofile_;_ZIP::ssf12.xml_;_
Next


'
Services.EndTransaction "t1"
'




 @@ hightlight id_;_1906254672_;_script infofile_;_ZIP::ssf5.xml_;_
 @@ hightlight id_;_2034328_;_script infofile_;_ZIP::ssf6.xml_;_
 @@ hightlight id_;_2034328_;_script infofile_;_ZIP::ssf7.xml_;_
