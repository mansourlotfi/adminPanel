(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8864)}])},8864:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return eb}});var t=s(5893),n=s(9008),i=s.n(n),a=s(8330),c=s(7069),l=s(6822),d=s(1214),o=s(9188),x=s(8334),h=s(5697),j=s.n(h),p=s(3426),u=s(2148),Z=s(7805),m=s(6242),g=s(4267),f=s(6447),y=s(5861),v=s(9661),b=s(3219);let w=e=>{let{difference:r,positive:s=!1,sx:n,value:i}=e;return(0,t.jsx)(m.Z,{sx:n,children:(0,t.jsxs)(g.Z,{children:[(0,t.jsxs)(f.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,t.jsxs)(f.Z,{spacing:1,children:[(0,t.jsx)(y.Z,{color:"text.secondary",variant:"overline",children:"بودجه"}),(0,t.jsx)(y.Z,{variant:"h4",children:i})]}),(0,t.jsx)(v.Z,{sx:{backgroundColor:"error.main",height:56,width:56},children:(0,t.jsx)(b.Z,{children:(0,t.jsx)(Z.Z,{})})})]}),r&&(0,t.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:2,sx:{mt:2},children:[(0,t.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:.5,children:[(0,t.jsx)(b.Z,{color:s?"success":"error",fontSize:"small",children:s?(0,t.jsx)(u.Z,{}):(0,t.jsx)(p.Z,{})}),(0,t.jsxs)(y.Z,{color:s?"success.main":"error.main",variant:"body2",children:[r,"%"]})]}),(0,t.jsx)(y.Z,{color:"text.secondary",variant:"caption",children:"از آخرین ماه"})]})]})})};w.prototypes={difference:j().number,positive:j().bool,sx:j().object,value:j().string.isRequired};var k=s(2912),T=s(2743),A=s(8445),C=s(7906),S=s(3184),I=s(3816),_=s(8102),D=s(295),E=s(7720),z=s(2023),R=s(3321),O=s(2377),P=s(948);let L=(0,P.ZP)("span")(e=>{let{theme:r,ownerState:s}=e,t=r.palette[s.color].alpha12,n="dark"===r.palette.mode?r.palette[s.color].main:r.palette[s.color].dark;return{alignItems:"center",backgroundColor:t,borderRadius:12,color:n,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:r.spacing(1),paddingRight:r.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),q=e=>{let{color:r="primary",children:s,...n}=e;return(0,t.jsx)(L,{ownerState:{color:r},...n,children:s})};q.propTypes={children:j().node,color:j().oneOf(["primary","secondary","error","info","warning","success"])};let N={pending:"warning",delivered:"success",refunded:"error"},V=e=>{let{orders:r=[],sx:s}=e;return(0,t.jsxs)(m.Z,{sx:s,children:[(0,t.jsx)(A.Z,{title:"Latest Orders"}),(0,t.jsx)(O.L,{sx:{flexGrow:1},children:(0,t.jsx)(l.Z,{sx:{minWidth:800},children:(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(S.Z,{children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(_.Z,{children:"سفارش"}),(0,t.jsx)(_.Z,{children:"مشتری"}),(0,t.jsx)(_.Z,{sortDirection:"desc",children:"تاریخ"}),(0,t.jsx)(_.Z,{children:"وضعیت"})]})}),(0,t.jsx)(D.Z,{children:r.map(e=>{let r=(0,k.Z)(e.createdAt,"dd/MM/yyyy");return(0,t.jsxs)(I.Z,{hover:!0,children:[(0,t.jsx)(_.Z,{children:e.ref}),(0,t.jsx)(_.Z,{children:e.customer.name}),(0,t.jsx)(_.Z,{children:r}),(0,t.jsx)(_.Z,{children:(0,t.jsx)(q,{color:N[e.status],children:e.status})})]},e.id)})})]})})}),(0,t.jsx)(E.Z,{}),(0,t.jsx)(z.Z,{sx:{justifyContent:"flex-end"},children:(0,t.jsx)(R.Z,{color:"inherit",endIcon:(0,t.jsx)(b.Z,{fontSize:"small",children:(0,t.jsx)(T.Z,{})}),size:"small",variant:"text",children:"نمایش همه"})})]})};V.prototype={orders:j().array,sx:j().object};var F=s(2141),G=s(4394),W=s(8462),B=s(891),M=s(8987),X=s(9334),J=s(4674),K=s(6641);let H=e=>{let{products:r=[],sx:s}=e;return(0,t.jsxs)(m.Z,{sx:s,children:[(0,t.jsx)(A.Z,{title:"جدیدترین محصولات"}),(0,t.jsx)(W.Z,{children:r.map((e,s)=>{let n=s<r.length-1,i=(0,F.Z)(e.updatedAt);return(0,t.jsxs)(B.ZP,{divider:n,children:[(0,t.jsx)(M.Z,{children:e.image?(0,t.jsx)(l.Z,{component:"img",src:"".concat(K.O,"/").concat(e.image),sx:{borderRadius:1,height:48,width:48}}):(0,t.jsx)(l.Z,{sx:{borderRadius:1,backgroundColor:"neutral.200",height:48,width:48}})}),(0,t.jsx)(X.Z,{primary:e.name,primaryTypographyProps:{variant:"subtitle1"},secondary:"بروز شده ".concat(i," قبل"),secondaryTypographyProps:{variant:"body2"}}),(0,t.jsx)(J.Z,{edge:"end",children:(0,t.jsx)(b.Z,{children:(0,t.jsx)(G.Z,{})})})]},e.id)})}),(0,t.jsx)(E.Z,{}),(0,t.jsx)(z.Z,{sx:{justifyContent:"flex-end"},children:(0,t.jsx)(R.Z,{color:"inherit",endIcon:(0,t.jsx)(b.Z,{fontSize:"small",children:(0,t.jsx)(T.Z,{})}),size:"small",variant:"text",children:"نمایش همه"})})]})};H.propTypes={products:j().array,sx:j().object};var Y=s(6207),$=s(4601),U=s(2734),Q=s(4581),ee=s(7297),er=s(5152),es=s.n(er);function et(){let e=(0,ee.Z)([""]);return et=function(){return e},e}let en=es()(()=>Promise.all([s.e(279),s.e(229)]).then(s.bind(s,7229)),{loadableGenerated:{webpack:()=>[7229]},ssr:!1,loading:()=>null}),ei=(0,P.ZP)(en)(et()),ea=()=>{let e=(0,U.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,Q.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},ec=e=>{let{chartSeries:r,sx:s}=e,n=ea();return(0,t.jsxs)(m.Z,{sx:s,children:[(0,t.jsx)(A.Z,{action:(0,t.jsx)(R.Z,{color:"inherit",size:"small",startIcon:(0,t.jsx)(b.Z,{fontSize:"small",children:(0,t.jsx)(Y.Z,{})}),children:"همگام سازی"}),title:"فروش ها"}),(0,t.jsx)(g.Z,{children:(0,t.jsx)(ei,{height:350,options:n,series:r,type:"bar",width:"100%"})}),(0,t.jsx)(E.Z,{}),(0,t.jsx)(z.Z,{sx:{justifyContent:"flex-end"},children:(0,t.jsx)(R.Z,{color:"inherit",endIcon:(0,t.jsx)(b.Z,{fontSize:"small",children:(0,t.jsx)($.Z,{})}),size:"small",children:"نمای کلی"})})]})};ec.protoTypes={chartSeries:j().array.isRequired,sx:j().object};var el=s(1590),ed=s(1458);let eo=e=>{let{value:r,sx:s}=e;return(0,t.jsx)(m.Z,{sx:s,children:(0,t.jsxs)(g.Z,{children:[(0,t.jsxs)(f.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,t.jsxs)(f.Z,{spacing:1,children:[(0,t.jsx)(y.Z,{color:"text.secondary",gutterBottom:!0,variant:"overline",children:"پیشرفت کار"}),(0,t.jsxs)(y.Z,{variant:"h4",children:[r,"%"]})]}),(0,t.jsx)(v.Z,{sx:{backgroundColor:"warning.main",height:56,width:56},children:(0,t.jsx)(b.Z,{children:(0,t.jsx)(el.Z,{})})})]}),(0,t.jsx)(l.Z,{sx:{mt:3},children:(0,t.jsx)(ed.Z,{value:r,variant:"determinate"})})]})})};eo.propTypes={value:j().number.isRequired,sx:j().object};var ex=s(9721);let eh=e=>{let{difference:r,positive:s=!1,sx:n,value:i}=e;return(0,t.jsx)(m.Z,{sx:n,children:(0,t.jsxs)(g.Z,{children:[(0,t.jsxs)(f.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,t.jsxs)(f.Z,{spacing:1,children:[(0,t.jsx)(y.Z,{color:"text.secondary",variant:"overline",children:"تعداد مشتری ها"}),(0,t.jsx)(y.Z,{variant:"h4",children:i})]}),(0,t.jsx)(v.Z,{sx:{backgroundColor:"success.main",height:56,width:56},children:(0,t.jsx)(b.Z,{children:(0,t.jsx)(ex.Z,{})})})]}),r&&(0,t.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:2,sx:{mt:2},children:[(0,t.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:.5,children:[(0,t.jsx)(b.Z,{color:s?"success":"error",fontSize:"small",children:s?(0,t.jsx)(u.Z,{}):(0,t.jsx)(p.Z,{})}),(0,t.jsxs)(y.Z,{color:s?"success.main":"error.main",variant:"body2",children:[r,"%"]})]}),(0,t.jsx)(y.Z,{color:"text.secondary",variant:"caption",children:"از آخرین ماه"})]})]})})};eh.propTypes={difference:j().number,positive:j().bool,value:j().string.isRequired,sx:j().object};let ej=e=>{let{value:r,sx:s}=e;return(0,t.jsx)(m.Z,{sx:s,children:(0,t.jsx)(g.Z,{children:(0,t.jsxs)(f.Z,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,t.jsxs)(f.Z,{spacing:1,children:[(0,t.jsx)(y.Z,{color:"text.secondary",variant:"overline",children:"سود کل"}),(0,t.jsx)(y.Z,{variant:"h4",children:r})]}),(0,t.jsx)(v.Z,{sx:{backgroundColor:"primary.main",height:56,width:56},children:(0,t.jsx)(b.Z,{children:(0,t.jsx)(Z.Z,{})})})]})})})};ej.propTypes={value:j().string,sx:j().object};var ep=s(4542),eu=s(1926),eZ=s(9974);let em=e=>{let r=(0,U.Z)();return{chart:{background:"transparent"},colors:[r.palette.primary.main,r.palette.success.main,r.palette.warning.main],dataLabels:{enabled:!1},labels:e,legend:{show:!1},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:r.palette.mode},tooltip:{fillSeriesColor:!1}}},eg={Desktop:(0,t.jsx)(b.Z,{children:(0,t.jsx)(ep.Z,{})}),Tablet:(0,t.jsx)(b.Z,{children:(0,t.jsx)(eu.Z,{})}),Phone:(0,t.jsx)(b.Z,{children:(0,t.jsx)(eZ.Z,{})})},ef=e=>{let{chartSeries:r,labels:s,sx:n}=e,i=em(s);return(0,t.jsxs)(m.Z,{sx:n,children:[(0,t.jsx)(A.Z,{title:"ترافیک ورودی"}),(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(ei,{height:300,options:i,series:r,type:"donut",width:"100%"}),(0,t.jsx)(f.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:2,sx:{mt:2},children:r.map((e,r)=>{let n=s[r];return(0,t.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[eg[n],(0,t.jsx)(y.Z,{sx:{my:1},variant:"h6",children:n}),(0,t.jsxs)(y.Z,{color:"text.secondary",variant:"subtitle2",children:[e,"%"]})]},n)})})]})]})};ef.propTypes={chartSeries:j().array.isRequired,labels:j().array.isRequired,sx:j().object};let ey=new Date,ev=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i(),{children:(0,t.jsx)("title",{children:"Overview | Devias Kit"})}),(0,t.jsx)(l.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,t.jsx)(d.Z,{maxWidth:"xl",children:(0,t.jsxs)(o.Z,{container:!0,spacing:3,children:[(0,t.jsx)(o.Z,{xs:12,sm:6,lg:3,children:(0,t.jsx)(w,{difference:12,positive:!0,sx:{height:"100%"},value:"$24k"})}),(0,t.jsx)(o.Z,{xs:12,sm:6,lg:3,children:(0,t.jsx)(eh,{difference:16,positive:!1,sx:{height:"100%"},value:"1.6k"})}),(0,t.jsx)(o.Z,{xs:12,sm:6,lg:3,children:(0,t.jsx)(eo,{sx:{height:"100%"},value:75.5})}),(0,t.jsx)(o.Z,{xs:12,sm:6,lg:3,children:(0,t.jsx)(ej,{sx:{height:"100%"},value:"$15k"})}),(0,t.jsx)(o.Z,{xs:12,lg:8,children:(0,t.jsx)(ec,{chartSeries:[{name:"This year",data:[18,16,5,8,3,14,14,16,17,19,18,20]},{name:"Last year",data:[12,11,4,6,2,9,9,10,11,12,13,13]}],sx:{height:"100%"}})}),(0,t.jsx)(o.Z,{xs:12,md:6,lg:4,children:(0,t.jsx)(ef,{chartSeries:[63,15,22],labels:["دسکتاپ","تبلت","موبایل"],sx:{height:"100%"}})}),(0,t.jsx)(o.Z,{xs:12,md:6,lg:4,children:(0,t.jsx)(H,{products:[{id:"5ece2c077e39da27658aa8a9",image:"/assets/products/product-1.png",name:"لورم ایپسوم متن ساختگی با",updatedAt:(0,a.Z)(ey,6).getTime()},{id:"5ece2c0d16f70bff2cf86cd8",image:"/assets/products/product-2.png",name:"لورم ایپسوم متن ساختگی با",updatedAt:(0,c.Z)((0,a.Z)(ey,8),2).getTime()},{id:"b393ce1b09c1254c3a92c827",image:"/assets/products/product-5.png",name:"لورم ایپسوم متن ساختگی با",updatedAt:(0,c.Z)((0,a.Z)(ey,1),1).getTime()},{id:"a6ede15670da63f49f752c89",image:"/assets/products/product-6.png",name:"لورم ایپسوم متن ساختگی با",updatedAt:(0,c.Z)((0,a.Z)(ey,3),3).getTime()},{id:"bcad5524fe3a2f8f8620ceda",image:"/assets/products/product-7.png",name:"لورم ایپسوم متن ساختگی با",updatedAt:(0,c.Z)((0,a.Z)(ey,5),6).getTime()}],sx:{height:"100%"}})}),(0,t.jsx)(o.Z,{xs:12,md:12,lg:8,children:(0,t.jsx)(V,{orders:[{id:"f69f88012978187a6c12897f",ref:"DEV1049",amount:30.5,customer:{name:"Ekaterina Tankova"},createdAt:15550164e5,status:"pending"},{id:"9eaa1c7dd4433f413c308ce2",ref:"DEV1048",amount:25.1,customer:{name:"Cao Yu"},createdAt:15550164e5,status:"delivered"},{id:"01a5230c811bd04996ce7c13",ref:"DEV1047",amount:10.99,customer:{name:"Alexa Richardson"},createdAt:155493e7,status:"refunded"},{id:"1f4e1bd0a87cea23cdb83d18",ref:"DEV1046",amount:96.43,customer:{name:"Anje Keizer"},createdAt:15547572e5,status:"pending"},{id:"9f974f239d29ede969367103",ref:"DEV1045",amount:32.54,customer:{name:"Clarke Gillebert"},createdAt:15546708e5,status:"delivered"},{id:"ffc83c1560ec2f66a1c05596",ref:"DEV1044",amount:16.76,customer:{name:"Adam Denisov"},createdAt:15546708e5,status:"delivered"}],sx:{height:"100%"}})})]})})})]});ev.getLayout=e=>(0,t.jsx)(x.A,{children:e});var eb=ev},6641:function(e,r,s){"use strict";s.d(r,{O:function(){return n}});var t=s(3454);let n=t.env.NEXT_PUBLIC_BASE_PATH||""}},function(e){e.O(0,[37,994,303,374,224,334,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);